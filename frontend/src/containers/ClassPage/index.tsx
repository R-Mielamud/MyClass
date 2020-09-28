import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import ClassCard from '../../components/ClassCard';
import Spinner from '../../components/common/Spinner';
import userInChannel from '../../helpers/userInChannel.helper';
import { RootState } from '../../typings/rootState';
import ChannelView from '../ChannelView';
import styles from './styles.module.scss';

interface Props {
    cls: WebApi.Entity.Class;
}

const ClassPage: React.FC<Props> = ({ cls }) => {
    const { user } = useSelector((state: RootState) => state.auth);

    if (!user) {
        return <Spinner />;
    }

    return (
        <div className={[styles.mainContainer, 'fill'].join(' ')}>
            <div className={styles.sidebar}>
                <div className={styles.center}>
                    <ClassCard onlyAvatar cls={cls} />
                </div>
                <a className={styles.backLink} href="/">
                    <Icon name="arrow circle left" />
                    Back to classes
                </a>
                <div>
                    {cls.channels.map((channel) =>
                        userInChannel(user.id, channel) ? (
                            <div className={styles.channel} key={channel.id}>
                                {channel.name}
                            </div>
                        ) : (
                            ''
                        ),
                    )}
                </div>
            </div>
            <div className={styles.mainContent}>
                <ChannelView channel={cls.channels[0]} />
            </div>
        </div>
    );
};

export default ClassPage;
