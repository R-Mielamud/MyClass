import createAction from '../../../helpers/createAction.helper';
import * as actionTypes from './actionTypes';

export const postMessage = createAction<actionTypes.PostMessage>(actionTypes.POST_MESSAGE);
