import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router';
import { RootState } from '../../typings/rootState';

const PrivateRoute: React.FC<RouteProps> = (props) => {
    const { isAuthorized } = useSelector((state: RootState) => state.auth);
    const Component = isAuthorized ? props.component : () => <Redirect to="/login" />;

    return <Route {...props} component={Component} />;
};

export default PrivateRoute;
