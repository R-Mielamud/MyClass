import { NotificationManager } from 'react-notifications';
import { all, put, call, takeEvery } from 'redux-saga/effects';
import history from '../../../helpers/history.helper';
import { removeToken, setToken } from '../../../helpers/userToken.helper';
import { getProfile, logIn, register } from '../../../services/auth.service';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* fetchLoadProfile() {
    try {
        const user = yield call(getProfile);
        yield put(actions.successLoadProfile({ user }));
    } catch (err) {
        yield put(actions.successLoadProfile({ user: null }));

        if (!/(login|register)\/?$/.test(window.location.href)) {
            history.push('/login');
        }
    }
}

function* watchLoadProfile() {
    yield takeEvery(actionTypes.LOAD_PROFILE, fetchLoadProfile);
}

function* fetchLogIn(action: ReturnType<typeof actions.logIn>) {
    try {
        const { type, ...data } = action;
        const result: WebApi.Specific.AuthResult = yield call(logIn, data);

        setToken(result.jwt_token);
        yield put(actions.successLoadProfile({ user: result.user }));
    } catch (err) {
        NotificationManager.error("Sorry, can't log in.", 'Error');
    }
}

function* watchLogIn() {
    yield takeEvery(actionTypes.LOG_IN, fetchLogIn);
}

function* fetchRegister(action: ReturnType<typeof actions.register>) {
    try {
        const { type, ...data } = action;
        const result: WebApi.Specific.AuthResult = yield call(register, data);

        setToken(result.jwt_token);
        yield put(actions.successLoadProfile({ user: result.user }));
    } catch (err) {
        NotificationManager.error("Sorry, can't register.", 'Error');
    }
}

function* watchRegister() {
    yield takeEvery(actionTypes.REGISTER, fetchRegister);
}

function* fetchLogOut() {
    try {
        removeToken();
        yield put(actions.successLoadProfile({ user: null }));
        history.push('/login');
    } catch (err) {
        NotificationManager.error("Sorry, can't logout.", 'Error');
    }
}

function* watchLogOut() {
    yield takeEvery(actionTypes.LOG_OUT, fetchLogOut);
}

export default function* authSaga() {
    yield all([watchLoadProfile(), watchLogIn(), watchRegister(), watchLogOut()]);
}
