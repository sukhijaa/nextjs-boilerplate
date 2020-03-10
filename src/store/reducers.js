import {combineReducers} from 'redux';
import ThemeReducer from 'themes';
import ArticleReducer from 'containers/articles';
import AuthorReducer from 'containers/authors';
import MenuReducer from 'containers/drawerLayout/reducers';
import {REDUCER_STORE_KEY} from 'containers/drawerLayout/constants';
import LoginReducers from 'containers/login';

export default (injectedReducers = {}) =>
  combineReducers({
    [ThemeReducer.key]: ThemeReducer.reducer,
    [ArticleReducer.key]: ArticleReducer.reducer,
    [AuthorReducer.key]: AuthorReducer.reducer,
    [REDUCER_STORE_KEY]: MenuReducer,
    [LoginReducers.key]: LoginReducers.reducer,
    ...injectedReducers,
  });
