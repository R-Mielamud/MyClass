import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Router, Switch } from 'react-router';
import PublicRoute from '../../components/PublicRoute';
import LogIn from '../../pages/LogIn';
import Register from '../../pages/Register';
import { loadProfile } from '../LoginPage/logic/actions';
import history from '../../helpers/history.helper';
import { RootState } from '../../typings/rootState';
import Spinner from '../../components/common/Spinner';
import PrivateRoute from '../../components/PrivateRoute';
import Classes from '../../pages/Classes';
import Class from '../../pages/Class';

const Routing: React.FC = () => {
    const dispatch = useDispatch();
    const { profileLoaded } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch(loadProfile());
    }, [dispatch]);

    if (!profileLoaded) return <Spinner />;

    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/" exact component={Classes} />
                <PrivateRoute path="/class/:id" exact component={Class} />
                <PublicRoute restricred path="/login" exact component={LogIn} />
                <PublicRoute restricred path="/register" exact component={Register} />
            </Switch>
        </Router>
    );
};

export default Routing;
