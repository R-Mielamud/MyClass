import callWebApi from '../helpers/callWebApi.helper';

export const getProfile = async (): Promise<WebApi.Entity.User | null> => {
    const res: Response = await callWebApi({
        method: 'GET',
        endpoint: 'auth/profile',
    });

    return (await res.json()) as WebApi.Entity.User;
};
