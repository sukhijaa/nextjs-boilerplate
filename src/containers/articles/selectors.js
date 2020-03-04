import { createSelector } from 'reselect';
import { selectArticlesSubStore } from 'store/reducers';

export const getAllArticles = createSelector(
  selectArticlesSubStore,
  articleState => articleState.allArticles
);

export const getActiveArticle = createSelector(
  selectArticlesSubStore,
  articleState => articleState.activeArticle
);
