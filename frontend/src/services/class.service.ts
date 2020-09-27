import { CreateClass } from '../containers/ClassesPage/logic/actionTypes';
import callWebApi from '../helpers/callWebApi.helper';

export const getClasses = async (): Promise<WebApi.Entity.Class[]> => {
    const res: Response = await callWebApi({
        method: 'GET',
        endpoint: 'class/',
    });

    return (await res.json()) as WebApi.Entity.Class[];
};

export const createClass = async (body: CreateClass): Promise<WebApi.Entity.Class> => {
    const res: Response = await callWebApi({
        method: 'POST',
        endpoint: 'class/',
        body,
    });

    return (await res.json()) as WebApi.Entity.Class;
};
