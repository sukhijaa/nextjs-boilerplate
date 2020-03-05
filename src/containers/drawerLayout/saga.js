import {put, takeLatest} from 'redux-saga/effects';
import {TOGGLE_DRAWER, toggleDrawer} from './actions';

function* toggleDrawerSaga() {
  yield put(toggleDrawer.Success());
}

export default function* menuOptionsSaga() {
  yield takeLatest(TOGGLE_DRAWER.REQUEST, toggleDrawerSaga);
}
