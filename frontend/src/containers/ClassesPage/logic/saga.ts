import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getClasses } from '../../../services/class.service';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* fetchLoadClasses() {
    try {
        const classes = yield call(getClasses);
        yield put(actions.loadClassesSuccess({ classes }));
    } catch (err) {
        alert("Can't load classes"); //notif//
        yield put(actions.loadClassesSuccess({ classes: [] }));
    }
}

function* watchLoadClasses() {
    yield takeEvery(actionTypes.LOAD_CLASSES, fetchLoadClasses);
}

export default function* classSaga() {
    yield all([watchLoadClasses()]);
}
