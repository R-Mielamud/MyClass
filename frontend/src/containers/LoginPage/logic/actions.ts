import createAction from '../../../helpers/createAction.helper';
import * as actionTypes from './actionTypes';

export const loadProfile = createAction(actionTypes.LOAD_PROFILE);
export const successLoadProfile = createAction<actionTypes.SuccessLoadProfile>(actionTypes.SUCCESS_LOAD_PROFILE);
