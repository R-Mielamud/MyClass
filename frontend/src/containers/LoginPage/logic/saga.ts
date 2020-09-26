import { all, put, call, takeEvery } from 'redux-saga/effects';
import history from '../../../helpers/history.helper';
import { setToken } from '../../../helpers/userToken.helper';
import { getProfile, logIn } from '../../../services/auth.service';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* fetchLoadProfile() {
    try {
        const user = yield call(getProfile);
        yield put(actions.successLoadProfile({ user }));
    } catch (err) {
        history.push('/login');
    }
}

function* watchLoadProfile() {
    yield takeEvery(actionTypes.LOAD_PROFILE, fetchLoadProfile);
}

function* fetchLogIn(action: ReturnType<typeof actions.logIn>) {
    try {
        const result: WebApi.Specific.AuthResult = yield call(logIn, {
            email: action.email,
            password: action.password,
        });

        setToken(result.jwt_token);
        yield put(actions.successLoadProfile({ user: result.user }));
    } catch (err) {
        alert("Sorry, can't log in."); //notif//
    }
}

function* watchLogIn() {
    yield takeEvery(actionTypes.LOG_IN, fetchLogIn);
}

export default function* authSaga() {
    yield all([watchLoadProfile(), watchLogIn()]);
}
