export const LOAD_PROFILE = 'USER:AUTH:PROFILE:LOAD';
export const SUCCESS_LOAD_PROFILE = 'USER:AUTH:PROFILE:LOAD:SUCCESS';
export const LOG_IN = 'USER:AUTH:LOG_IN';

export type SuccessLoadProfile = {
    user: WebApi.Entity.User | null;
};

export type LogIn = {
    email: string;
    password: string;
};
