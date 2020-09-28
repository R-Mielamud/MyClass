import React, { useEffect, useState } from 'react';
import { Comment } from 'semantic-ui-react';
import ChannelMessage from '../../components/ChannelMessage';
import Spinner from '../../components/common/Spinner';
import MessageForm from '../../components/MessageForm';
import MessagesLine from '../../components/MessagesLine';
import { getMessages } from '../../services/chat.service';
import styles from './styles.module.scss';

interface Props {
    channel: WebApi.Entity.Channel;
}

const ChannelView: React.FC<Props> = ({ channel }) => {
    const [messages, setMessages] = useState<WebApi.Entity.Message[]>([]);
    const [mustFetchMessages, setMustFetchMessages] = useState<boolean>(true);

    useEffect(() => {
        if (mustFetchMessages) {
            setMustFetchMessages(false);
            getMessages(channel.id).then(setMessages);
        }
    }, [mustFetchMessages, messages, channel.id]);

    if (mustFetchMessages) {
        return <Spinner />;
    }

    let lastLineDate: Date | null = null;

    return (
        <Comment.Group className={styles.messagesContainer}>
            {messages.map((message) => {
                let line = null;

                if (!lastLineDate || lastLineDate.getDate() < new Date(message.created_at).getDate()) {
                    lastLineDate = new Date(message.created_at);
                    line = <MessagesLine date={lastLineDate} />;
                }

                return (
                    <div key={message.id}>
                        {line}
                        <ChannelMessage message={message} />
                    </div>
                );
            })}
            <MessageForm channelId={channel.id} />
        </Comment.Group>
    );
};

export default ChannelView;
