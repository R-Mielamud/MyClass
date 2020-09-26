import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import PublicRoute from '../../components/PublicRoute';
import LogIn from '../../pages/LogIn';
import { loadProfile } from '../LoginPage/logic/actions';

const Routing: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProfile());
    }, [dispatch]);

    return (
        <Switch>
            <PublicRoute restricred path="/login" exact component={LogIn} />
        </Switch>
    );
};

export default Routing;
