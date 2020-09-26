import React, { useEffect, useState } from 'react';
import { Header as HeaderUI, Dropdown, Menu } from 'semantic-ui-react';
import Avatar from '../../components/Avatar';
import getUsername from '../../helpers/getUsername';
import { getProfile } from '../../services/auth.service';
import styles from './styles.module.scss';

const Header: React.FC = () => {
    const [user, setUser] = useState<WebApi.Entity.User | null>(null);
    const [mustFetchUser, setMustFetchUser] = useState<boolean>(true);

    useEffect(() => {
        if (mustFetchUser) {
            setMustFetchUser(false);
            getProfile().then(setUser);
        }
    }, [mustFetchUser]);

    if (!user) return null;

    const username: string = getUsername(user);

    return (
        <div className={styles.header}>
            <Menu secondary className={styles.menu}>
                <Menu.Item>
                    <HeaderUI as="h1">
                        <span className={styles.greenText}>My</span>
                        Class
                    </HeaderUI>
                </Menu.Item>
                <Menu.Item position="right">
                    {user ? (
                        <div className={styles.userInfo}>
                            <Avatar user={user} />
                            <Dropdown text={username}>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {}}>Log out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    ) : (
                        ''
                    )}
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Header;