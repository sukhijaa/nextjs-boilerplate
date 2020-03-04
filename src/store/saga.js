import { all, delay, put } from 'redux-saga/effects';
import { changeTheme } from 'themes/actions';
import { ASYNC_REDUX_SAGA_PROP_TEXT, GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS } from 'utils/constants';
import { APIEndpoints, buildURL, getBaseURLFromContext, HTTP } from '../utils/HTTPRequests';
import articleSaga from 'containers/articles/saga';

const TEST = process.env.NODE_ENV === 'test';

function* getAsyncReduxSagaProp() {
  yield delay(TEST ? 100 : 2000);

  yield put({
    type: GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS,
    data: ASYNC_REDUX_SAGA_PROP_TEXT
  });
}

function* getChangeTheme() {
  yield delay(1000);
  yield put(changeTheme());
}

function* getAndUpdateArticles() {
  const articleURL = buildURL(APIEndpoints.GET_SINGLE_ARTICLE, { slug });
  const articleDetail = yield HTTP.GET(articleURL, getBaseURLFromContext(ctx));

  yield put();
}

function* rootSaga() {
  yield all([
    articleSaga()
  ]);
}

export default rootSaga;
