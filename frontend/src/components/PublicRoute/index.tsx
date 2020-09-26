import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { RootState } from '../../typings/rootState';

interface Props {
    restricred?: boolean;
}

const PublicRoute: React.FC<RouteProps & Props> = (props) => {
    const { isAuthorized } = useSelector((state: RootState) => state.auth);

    if (isAuthorized && props.restricred) {
        return <Redirect to="/" />;
    }

    return <Route {...props} />;
};

export default PublicRoute;
