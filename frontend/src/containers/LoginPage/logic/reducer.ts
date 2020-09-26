import createReducer from '../../../helpers/createReducer.helper';
import { AuthState, initialState } from './state';
import * as actionTypes from './actionTypes';

export const authReducer = createReducer<AuthState>(initialState, {
    [actionTypes.SUCCESS_LOAD_PROFILE](state, action: actionTypes.SuccessLoadProfile) {
        return {
            ...state,
            user: action.user,
            isAuthorized: Boolean(action.user),
        };
    },
});
