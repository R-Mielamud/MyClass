import React from 'react';
import getInitials from '../../../helpers/getInitials.helper';
import styles from './styles.module.scss';

interface Props {
    user: WebApi.Entity.User;
    small?: boolean;
}

// eslint-disable-next-line
const Avatar: React.FC<Props> = ({ user, small }) => {
    return (
        <div className={[styles.lettersAvatar, 'avatar', small ? styles.small : ''].join(' ')}>{getInitials(user)}</div>
    );
};

export default Avatar;
