import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Grid, Header, List, Segment } from 'semantic-ui-react';
import RegisterForm from '../../components/RegisterForm';
import { RootState } from '../../typings/rootState';
import { register } from '../LoginPage/logic/actions';
import { LogIn } from '../LoginPage/logic/actionTypes';
import styles from './styles.module.scss';

const RegisterPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { isAuthorized } = useSelector((state: RootState) => state.auth);

    if (isAuthorized) {
        setLoading(false);
        return <Redirect to="/" />;
    }

    const submit = (data: LogIn) => {
        setLoading(true);
        dispatch(register(data));
    };

    return (
        <Grid columns="1" textAlign="center" verticalAlign="middle" className="fill">
            <Grid.Column style={{ maxWidth: 400 }}>
                <Header as="h1">Sign up to MyClass</Header>
                <Segment>
                    <RegisterForm onSubmit={submit} loading={loading} />
                    <List bulleted horizontal className={styles.list}>
                        <List.Item as="a" href="/login">
                            Log in
                        </List.Item>
                    </List>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default RegisterPage;
