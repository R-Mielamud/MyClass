import React from 'react';
import moment from 'moment';
import { Divider } from 'semantic-ui-react';

interface Props {
    date: Date;
}

const MessagesLine: React.FC<Props> = ({ date }) => {
    return (
        <Divider horizontal style={{ marginTop: 20, marginBottom: 20 }}>
            {moment(date).format('LL')}
        </Divider>
    );
};

export default MessagesLine;
