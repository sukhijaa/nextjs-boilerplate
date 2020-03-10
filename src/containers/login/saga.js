import {put, takeLatest} from 'redux-saga/effects';
import {LOG_USER_IN, LOG_USER_OUT, logUserIn, logUserOut, UPDATE_USERNAME, updateUserName} from './actions';
import {Router, ROUTE_NAMES} from 'server/routes';

function* logUserInSaga() {
  yield put(logUserIn.Success());
  Router.pushRoute(ROUTE_NAMES.INDEX);
}

function* logUserOutSaga() {
  yield put(logUserOut.Success());
}

function* updateUserNameSaga(action) {
  yield put(updateUserName.Success());
}

export default function* loginSaga() {
  yield takeLatest(LOG_USER_OUT.REQUEST, logUserOutSaga);
  yield takeLatest(LOG_USER_IN.REQUEST, logUserInSaga);
  yield takeLatest(UPDATE_USERNAME.REQUEST, updateUserNameSaga);
}
