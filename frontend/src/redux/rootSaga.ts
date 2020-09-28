import { all } from 'redux-saga/effects';
import chatSaga from '../components/MessageForm/logic/saga';
import classSaga from '../containers/ClassesPage/logic/saga';
import authSaga from '../containers/LoginPage/logic/saga';

export default function* rootSaga() {
    yield all([authSaga(), classSaga(), chatSaga()]);
}
