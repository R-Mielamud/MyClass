import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import Spinner from '../../components/common/Spinner';
import ClassPage from '../../containers/ClassPage';
import { getClassById } from '../../services/class.service';

interface Match {
    id: string;
}

const Class: React.FC = () => {
    const match = useRouteMatch<Match>();
    const { id: strid } = match.params;
    const id = Number(strid);
    const [cls, setClass] = useState<WebApi.Entity.Class | null>(null);
    const [mustFetchClass, setMustFetchClass] = useState<boolean>(true);

    useEffect(() => {
        if (mustFetchClass) {
            setMustFetchClass(false);
            getClassById(id).then(setClass);
        }
    }, [mustFetchClass, cls, id]);

    if (!cls) {
        return <Spinner />;
    }

    return <ClassPage cls={cls} />;
};

export default Class;
