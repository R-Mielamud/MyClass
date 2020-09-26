export const LOAD_PROFILE = 'USER:AUTH:PROFILE:LOAD';
export const SUCCESS_LOAD_PROFILE = 'USER:AUTH:PROFILE:LOAD:SUCCESS';

export type SuccessLoadProfile = {
    user: WebApi.Entity.User | null;
};
