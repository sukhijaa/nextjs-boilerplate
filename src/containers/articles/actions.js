import { actionCreator, actionTypeCreator } from '../../store/actionCreators';

export const UPDATE_ARTICLES = actionTypeCreator('articles/update');
export const CHANGE_ACTIVE_ARTICLE = actionTypeCreator('articles/changeActive');

export const updateArticles = actionCreator(UPDATE_ARTICLES);
export const changeActiveArticle = actionCreator(CHANGE_ACTIVE_ARTICLE);
