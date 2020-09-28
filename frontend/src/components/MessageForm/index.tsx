import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, Form } from 'semantic-ui-react';
import getUsername from '../../helpers/getUsername.helper';
import { RootState } from '../../typings/rootState';
import Avatar from '../common/Avatar';
import { postMessage } from './logic/actions';
import styles from './styles.module.scss';

interface Props {
    channelId: number;
}

const MessageForm: React.FC<Props> = ({ channelId }) => {
    const [text, setText] = useState<string>('');
    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    if (!user) {
        return null;
    }

    const submit = () => {
        if (!text.trim()) return;
        dispatch(postMessage({ text, channelId }));
    };

    return (
        <Comment>
            <Avatar user={user} small />
            <Comment.Content>
                <Comment.Author>{getUsername(user)}</Comment.Author>
                <Comment.Text>
                    <Form style={{ position: 'relative', bottom: 10 }} onSubmit={submit}>
                        <Form.Input
                            style={{ maxWidth: 600 }}
                            size="small"
                            value={text}
                            placeholder="Enter your text"
                            onChange={(event, data) => setText(data.value)}
                        />
                        <div className={styles.tooltip}>
                            <span style={{ fontWeight: 'bold' }}>Enter </span>
                            to send
                        </div>
                    </Form>
                </Comment.Text>
            </Comment.Content>
        </Comment>
    );
};

export default MessageForm;
