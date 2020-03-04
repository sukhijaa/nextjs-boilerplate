import { createSelector } from 'reselect';
import { selectAuthorSubStore } from 'store/reducers';
import {SUB_FIELDS} from './reducers';

export const getAllAuthors = createSelector(
  selectAuthorSubStore,
  articleState => articleState[SUB_FIELDS.ALL_AUTHORS]
);

export const getActiveAuthor = createSelector(
  selectAuthorSubStore,
  articleState => articleState[SUB_FIELDS.ACTIVE_AUTHOR]
);
