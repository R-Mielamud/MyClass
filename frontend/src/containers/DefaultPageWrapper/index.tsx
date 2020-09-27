import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadClasses } from '../ClassesPage/logic/actions';
import Header from '../Header';

const DefaultPageWrapper: React.FC = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadClasses());
    }, [dispatch]);

    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default DefaultPageWrapper;
