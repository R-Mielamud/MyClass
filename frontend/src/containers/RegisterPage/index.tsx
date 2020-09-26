import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Grid, Header, Segment } from 'semantic-ui-react';
import RegisterForm from '../../components/RegisterForm';
import { RootState } from '../../typings/rootState';
import { register } from '../LoginPage/logic/actions';
import { LogIn } from '../LoginPage/logic/actionTypes';

const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();
    const { isAuthorized } = useSelector((state: RootState) => state.auth);

    if (isAuthorized) {
        return <Redirect to="/" />;
    }

    const submit = (data: LogIn) => {
        dispatch(register(data));
    };

    return (
        <Grid columns="1" textAlign="center" verticalAlign="middle" className="fill">
            <Grid.Column style={{ maxWidth: 400 }}>
                <Header as="h1">Sign up to MyClass</Header>
                <Segment>
                    <RegisterForm onSubmit={submit} />
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default RegisterPage;
