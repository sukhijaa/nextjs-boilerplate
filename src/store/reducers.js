import { combineReducers } from 'redux';
import ThemeReducer from 'themes/reducer';
import ArticleReducer from 'containers/articles/reducer';
import AuthorReducer from 'containers/authors/reducers';
import MenuReducer from 'containers/drawerLayout/reducers';
import {REDUCER_STORE_KEY} from "../containers/drawerLayout/constants";

const THEME_KEY = 'theme';
const ARTICLE_KEY = 'articles';
const AUTHOR_KEY = 'author';

export default (injectedReducers = {}) =>
  combineReducers({
    [THEME_KEY]: ThemeReducer,
    [ARTICLE_KEY]: ArticleReducer,
    [AUTHOR_KEY]: AuthorReducer,
    [REDUCER_STORE_KEY]: MenuReducer,
    ...injectedReducers
  });

export const selectThemeSubStore = store => store[THEME_KEY];
export const selectArticlesSubStore = store => store[ARTICLE_KEY];
export const selectAuthorSubStore = store => store[AUTHOR_KEY];
