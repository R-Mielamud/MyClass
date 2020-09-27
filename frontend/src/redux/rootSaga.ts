import { all } from 'redux-saga/effects';
import classSaga from '../containers/ClassesPage/logic/saga';
import authSaga from '../containers/LoginPage/logic/saga';

export default function* rootSaga() {
    yield all([authSaga(), classSaga()]);
}
