import produce from 'immer';
import {GET_AUTHORS, CHANGE_ACTIVE_AUTHOR} from './actions';

export const SUB_FIELDS = {
  ALL_AUTHORS: 'allAuthors',
  ACTIVE_AUTHOR: 'activeAuthor',
};

const initialState = {
  [SUB_FIELDS.ALL_AUTHORS]: [],
  [SUB_FIELDS.ACTIVE_AUTHOR]: {},
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_AUTHORS.SUCCESS: {
        draft[SUB_FIELDS.ALL_AUTHORS] = action.payload;
        break;
      }
      case CHANGE_ACTIVE_AUTHOR.SUCCESS: {
        draft[SUB_FIELDS.ACTIVE_AUTHOR] = action.payload;
        break;
      }
      default: {
        break;
      }
    }
  });
