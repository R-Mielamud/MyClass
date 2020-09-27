import React from 'react';
import ClassesPage from '../../containers/ClassesPage';
import DefaultPageWrapper from '../../containers/DefaultPageWrapper';

const Classes: React.FC = () => {
    return (
        <DefaultPageWrapper>
            <ClassesPage />
        </DefaultPageWrapper>
    );
};

export default Classes;
