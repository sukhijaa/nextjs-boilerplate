import { actionCreator, actionTypeCreator } from '../../store/actionCreators';

export const GET_AUTHORS = actionTypeCreator('authors/getAll');
export const CHANGE_ACTIVE_AUTHOR = actionTypeCreator('author/activeAuthor');

export const getAllAuthors = actionCreator(GET_AUTHORS);
export const changeActiveAuthor = actionCreator(CHANGE_ACTIVE_AUTHOR);
