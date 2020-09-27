import callWebApi from '../helpers/callWebApi.helper';

export const getClasses = async (): Promise<WebApi.Entity.Class[]> => {
    const res: Response = await callWebApi({
        method: 'GET',
        endpoint: 'class/',
    });

    return (await res.json()) as WebApi.Entity.Class[];
};
