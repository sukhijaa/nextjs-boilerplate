import {createSelector} from 'reselect';
import {SUB_FIELDS} from './reducers';
import {AUTHORS_REDUCER_KEY} from './constants';

const selectAuthorSubStore = store => store[AUTHORS_REDUCER_KEY];

export const getAllAuthors = createSelector(
  selectAuthorSubStore,
  articleState => articleState[SUB_FIELDS.ALL_AUTHORS],
);

export const getActiveAuthor = createSelector(
  selectAuthorSubStore,
  articleState => articleState[SUB_FIELDS.ACTIVE_AUTHOR],
);
