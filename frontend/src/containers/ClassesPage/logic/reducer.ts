import createReducer from '../../../helpers/createReducer.helper';
import { ClassState, initialState } from './state';
import * as actionTypes from './actionTypes';

export const classReducer = createReducer<ClassState>(initialState, {
    [actionTypes.LOAD_CLASSES_SUCCESS](state, action: actionTypes.LoadClassesSuccess) {
        return {
            ...state,
            classes: action.classes,
            classesLoaded: true,
        };
    },
});
