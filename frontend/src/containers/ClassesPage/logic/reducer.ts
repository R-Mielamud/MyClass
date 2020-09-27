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
    [actionTypes.CREATE_CLASS_SUCCESS](state, action: actionTypes.CreateClassSuccess) {
        return {
            ...state,
            classes: [...state.classes, action.class],
            recentlyCreatedClass: action.class,
        };
    },
    [actionTypes.RESET_RECENTLY_CREATED](state) {
        return {
            ...state,
            recentlyCreatedClass: null,
        };
    },
    [actionTypes.JOIN_CLASS_SUCCESS](state, action: actionTypes.JoinClassSuccess) {
        return {
            ...state,
            classes: [...state.classes, action.class],
            recentlyJoinedClass: action.class,
        };
    },
});
