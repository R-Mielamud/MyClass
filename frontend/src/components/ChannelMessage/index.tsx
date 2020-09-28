import React from 'react';
import { Comment } from 'semantic-ui-react';
import getUsername from '../../helpers/getUsername.helper';
import Avatar from '../common/Avatar';
import moment from 'moment';

interface Props {
    message: WebApi.Entity.Message;
}

const ChannelMessage: React.FC<Props> = ({ message }) => {
    return (
        <Comment style={{ marginBottom: 20 }}>
            <Avatar user={message.author} small />
            <Comment.Content>
                <Comment.Author as="span">{getUsername(message.author)}</Comment.Author>
                <Comment.Metadata>
                    {moment(message.created_at).fromNow()}
                    {message.updated_at ? <span>(edited {moment(message.updated_at).fromNow()})</span> : ''}
                </Comment.Metadata>
                <Comment.Text>{message.text}</Comment.Text>
            </Comment.Content>
        </Comment>
    );
};

export default ChannelMessage;
