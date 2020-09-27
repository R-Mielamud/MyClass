import { NotificationManager } from 'react-notifications';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { createClass, getClasses, joinClass } from '../../../services/class.service';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* fetchLoadClasses() {
    try {
        const classes = yield call(getClasses);
        yield put(actions.loadClassesSuccess({ classes }));
    } catch (err) {
        NotificationManager.error("Sorry, can't load classes", 'Error');
        yield put(actions.loadClassesSuccess({ classes: [] }));
    }
}

function* watchLoadClasses() {
    yield takeEvery(actionTypes.LOAD_CLASSES, fetchLoadClasses);
}

function* fetchCreateClass(action: ReturnType<typeof actions.createClass>) {
    try {
        const { type, ...data } = action;
        const newClass = yield call(createClass, data);
        yield put(actions.createClassSuccess({ class: newClass }));
    } catch (err) {
        NotificationManager.error("Sorry, can't create class", 'Error');
    }
}

function* watchCreateClass() {
    yield takeEvery(actionTypes.CREATE_CLASS, fetchCreateClass);
}

function* fetchJoinClass(action: ReturnType<typeof actions.joinClass>) {
    try {
        const { type, ...data } = action;
        const newClass = yield call(joinClass, data);
        yield put(actions.joinClassSuccess({ class: newClass }));
    } catch (err) {
        NotificationManager.error('Invalid join key.', 'Error');
    }
}

function* watchJoinClass() {
    yield takeEvery(actionTypes.JOIN_CLASS, fetchJoinClass);
}

export default function* classSaga() {
    yield all([watchLoadClasses(), watchCreateClass(), watchJoinClass()]);
}
