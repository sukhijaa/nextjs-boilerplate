import { call, put, takeLatest } from 'redux-saga/effects';
import { CHANGE_ACTIVE_ARTICLE, changeActiveArticle, UPDATE_ARTICLES, updateArticles } from './actions';
import { APIEndpoints, buildURL, HTTP } from '../../utils/HTTPRequests';

function* fetchArticles(action) {
  const { base } = action.payload;

  const articles = yield call(HTTP.GET, APIEndpoints.GET_ARTICLES_LOCAL, base);
  yield put(updateArticles.Success(articles));
}

function* fetchSingleArticle(action) {
  const { slug, base } = action.payload;

  const articleURL = buildURL(APIEndpoints.GET_SINGLE_ARTICLE, { slug });
  const articleDetail = yield call(HTTP.GET, articleURL, base);
  yield put(changeActiveArticle.Success(articleDetail));
}

export default function* articleSaga() {
  yield takeLatest(UPDATE_ARTICLES.REQUEST, fetchArticles);
  yield takeLatest(CHANGE_ACTIVE_ARTICLE.REQUEST, fetchSingleArticle);
}
