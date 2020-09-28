import { call, all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { postMessage } from '../../../services/chat.service';
import { NotificationManager } from 'react-notifications';

function* fetchPostMessage(action: ReturnType<typeof actions.postMessage>) {
    try {
        yield call(postMessage, action.text, action.channelId);
    } catch (err) {
        NotificationManager.error("Sorry, can't post message", 'Error');
    }
}

function* watchPostMessage() {
    yield takeEvery(actionTypes.POST_MESSAGE, fetchPostMessage);
}

export default function* chatSaga() {
    yield all([watchPostMessage()]);
}
