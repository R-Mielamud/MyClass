import createAction from '../../../helpers/createAction.helper';
import * as actionTypes from './actionTypes';

export const loadClasses = createAction(actionTypes.LOAD_CLASSES);
export const loadClassesSuccess = createAction<actionTypes.LoadClassesSuccess>(actionTypes.LOAD_CLASSES_SUCCESS);
export const createClass = createAction<actionTypes.CreateClass>(actionTypes.CREATE_CLASS);
export const createClassSuccess = createAction<actionTypes.CreateClassSuccess>(actionTypes.CREATE_CLASS_SUCCESS);
export const resetRecentlyCreated = createAction(actionTypes.RESET_RECENTLY_CREATED);
