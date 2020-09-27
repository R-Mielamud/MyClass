import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { RootState } from '../../typings/rootState';
import { joinClass } from '../ClassesPage/logic/actions';
import styles from './styles.module.scss';

interface Props {
    children: JSX.Element;
}

const JoinClassModal: React.FC<Props> = ({ children }) => {
    const [joinKey, setJoinKey] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { recentlyJoinedClass } = useSelector((state: RootState) => state.class);

    useEffect(() => {
        if (recentlyJoinedClass) {
            setLoading(false);
            setIsOpened(false);
        }
    }, [recentlyJoinedClass]);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!joinKey) return;

        setLoading(true);
        setJoinKey('');
        dispatch(joinClass({ join_key: joinKey }));
    };

    const resetStateAndClose = () => {
        setJoinKey('');
        setLoading(false);
        setIsOpened(false);
    };

    return (
        <Modal
            as="form"
            dimmer="inverted"
            openOnTriggerClick
            trigger={children}
            open={isOpened}
            onOpen={() => setIsOpened(true)}
            onClose={() => setIsOpened(false)}
            onSubmit={submit}
        >
            <Modal.Header>Join class</Modal.Header>
            <Modal.Content>
                <Form as="div">
                    <Form.Input
                        fluid
                        placeholder="Enter your join key"
                        onChange={(event, data) => setJoinKey(data.value)}
                        value={joinKey}
                    />
                    <Message>
                        <Message.Content>HINT: You can ask your teacher for join key</Message.Content>
                    </Message>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <div className={styles.right}>
                    <Button onClick={resetStateAndClose}>Cancel</Button>
                    <Button primary loading={loading} disabled={!Boolean(joinKey)}>
                        Join
                    </Button>
                </div>
            </Modal.Actions>
        </Modal>
    );
};

export default JoinClassModal;
