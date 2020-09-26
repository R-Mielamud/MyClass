import React from 'react';
import { useSelector } from 'react-redux';
import { Header as HeaderUI, Dropdown, Menu } from 'semantic-ui-react';
import Avatar from '../../components/Avatar';
import getUsername from '../../helpers/getUsername.helper';
import { RootState } from '../../typings/rootState';
import styles from './styles.module.scss';

const Header: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    if (!user) {
        return null;
    }

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
