import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Grid, Header, List, Segment } from 'semantic-ui-react';
import LoginForm from '../../components/LoginForm';
import { RootState } from '../../typings/rootState';
import { logIn } from './logic/actions';
import { LogIn } from './logic/actionTypes';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const { isAuthorized } = useSelector((state: RootState) => state.auth);

    if (isAuthorized) {
        return <Redirect to="/" />;
    }

    const submit = (data: LogIn) => {
        dispatch(logIn(data));
    };

    return (
        <Grid columns="1" textAlign="center" verticalAlign="middle" className="fill">
            <Grid.Column style={{ maxWidth: 400 }}>
                <Header as="h1">Log in to MyClass</Header>
                <Segment>
                    <LoginForm onSubmit={submit} />
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default LoginPage;
