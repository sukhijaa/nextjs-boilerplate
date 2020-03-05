import { all } from 'redux-saga/effects';
import articleSaga from 'containers/articles/saga';

const TEST = process.env.NODE_ENV === 'test';

function* rootSaga() {
  yield all([
    articleSaga()
  ]);
}

export default rootSaga;
