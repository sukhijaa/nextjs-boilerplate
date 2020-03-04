import { combineReducers } from 'redux';
import ThemeReducer from 'themes/reducer';
import ArticleReducer from 'containers/articles/reducer';

const THEME_KEY = 'theme';
const ARTICLE_KEY = 'articles';

export default (injectedReducers = {}) =>
  combineReducers({
    [THEME_KEY]: ThemeReducer,
    [ARTICLE_KEY]: ArticleReducer,
    ...injectedReducers
  });

export const selectThemeSubStore = store => store[THEME_KEY];
export const selectArticlesSubStore = store => store[ARTICLE_KEY];
