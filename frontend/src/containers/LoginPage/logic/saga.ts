import { all, put, call, takeEvery } from 'redux-saga/effects';
import history from '../../../helpers/history.helper';
import { getProfile } from '../../../services/auth.service';
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

export default function* authSaga() {
    yield all([watchLoadProfile()]);
}
