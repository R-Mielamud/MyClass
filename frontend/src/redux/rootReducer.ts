import { combineReducers } from 'redux';
import { classReducer } from '../containers/ClassesPage/logic/reducer';
import { authReducer } from '../containers/LoginPage/logic/reducer';
import { RootState } from '../typings/rootState';

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    class: classReducer,
});

export default rootReducer;
