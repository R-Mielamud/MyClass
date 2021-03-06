import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Grid, Header, List, Segment } from 'semantic-ui-react';
import LoginForm from '../../components/LoginForm';
import { RootState } from '../../typings/rootState';
import { logIn } from './logic/actions';
import { LogIn } from './logic/actionTypes';
import styles from './styles.module.scss';

const LoginPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { isAuthorized } = useSelector((state: RootState) => state.auth);

    if (isAuthorized) {
        setLoading(false);
        return <Redirect to="/" />;
    }

    const submit = (data: LogIn) => {
        setLoading(true);
        dispatch(logIn(data));
    };

    return (
        <Grid columns="1" textAlign="center" verticalAlign="middle" className="fill">
            <Grid.Column style={{ maxWidth: 400 }}>
                <Header as="h1">Log in to MyClass</Header>
                <Segment>
                    <LoginForm onSubmit={submit} loading={loading} />
                    <List bulleted horizontal className={styles.list}>
                        <List.Item as="a" href="/register">
                            Sign up
                        </List.Item>
                        <List.Item as="a" href="/password">
                            Forgot password?
                        </List.Item>
                    </List>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default LoginPage;
