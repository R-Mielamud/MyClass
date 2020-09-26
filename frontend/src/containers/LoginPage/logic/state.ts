import { getToken } from '../../../helpers/userToken.helper';

export interface AuthState {
    user: WebApi.Entity.User | null;
    jwtToken: string | null;
    isAuthorized: boolean;
}

export const initialState: AuthState = {
    user: null,
    jwtToken: getToken(),
    isAuthorized: false,
};
