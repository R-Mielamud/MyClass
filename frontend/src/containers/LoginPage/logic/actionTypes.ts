export const LOAD_PROFILE = 'USER:AUTH:PROFILE:LOAD';
export const SUCCESS_LOAD_PROFILE = 'USER:AUTH:PROFILE:LOAD:SUCCESS';
export const LOG_IN = 'USER:AUTH:LOG_IN';
export const REGISTER = 'USER:AUTH:REGISTER';
export const LOG_OUT = 'USER:AUTH:LOG_OUT';

export interface SuccessLoadProfile {
    user: WebApi.Entity.User | null;
}

export interface LogIn {
    email: string;
    password: string;
}

export interface Register extends LogIn {
    first_name?: string;
    last_name?: string;
}
