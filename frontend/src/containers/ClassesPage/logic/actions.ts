import createAction from '../../../helpers/createAction.helper';
import * as actionTypes from './actionTypes';

export const loadClasses = createAction(actionTypes.LOAD_CLASSES);
export const loadClassesSuccess = createAction<actionTypes.LoadClassesSuccess>(actionTypes.LOAD_CLASSES_SUCCESS);
