import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router';
import { RootState } from '../../typings/rootState';

const PrivateRoute: React.FC<RouteProps> = (props) => {
    const { isAuthorized } = useSelector((state: RootState) => state.auth);

    if (isAuthorized) {
        return <Route {...props} />;
    }

    return <Redirect to="/login" />;
};

export default PrivateRoute;
