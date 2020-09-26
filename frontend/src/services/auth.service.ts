import { LogIn, Register } from '../containers/LoginPage/logic/actionTypes';
import callWebApi from '../helpers/callWebApi.helper';

export const getProfile = async (): Promise<WebApi.Entity.User> => {
    const res: Response = await callWebApi({
        method: 'GET',
        endpoint: 'auth/profile/',
    });

    return (await res.json()) as WebApi.Entity.User;
};

export const logIn = async (data: LogIn): Promise<WebApi.Specific.AuthResult> => {
    const res: Response = await callWebApi({
        method: 'POST',
        endpoint: 'auth/login/',
        body: data,
    });

    return (await res.json()) as WebApi.Specific.AuthResult;
};

export const register = async (data: Register): Promise<WebApi.Specific.AuthResult> => {
    const res: Response = await callWebApi({
        method: 'POST',
        endpoint: 'auth/register/',
        body: data,
    });

    return (await res.json()) as WebApi.Specific.AuthResult;
};
