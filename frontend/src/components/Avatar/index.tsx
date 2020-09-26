import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './styles.module.scss';

interface Props {
    user: WebApi.Entity.User;
}

// eslint-disable-next-line
const Avatar: React.FC<Props> = ({ user }) => {
    return (
        <Image
            src="https://iupac.org/wp-content/uploads/2018/05/default-avatar-768x768.png"
            className={styles.avatar}
            circular
        />
    );
};

export default Avatar;
