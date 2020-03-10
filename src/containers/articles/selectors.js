import {createSelector} from 'reselect';
import {ARTICLE_REDUCER_KEY} from './constants';

const selectArticlesSubStore = store => store[ARTICLE_REDUCER_KEY];

export const getAllArticles = createSelector(
  selectArticlesSubStore,
  articleState => articleState.allArticles,
);

export const getActiveArticle = createSelector(
  selectArticlesSubStore,
  articleState => articleState.activeArticle,
);
