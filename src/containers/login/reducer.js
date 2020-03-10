import produce from "immer";
import {LOG_USER_IN, LOG_USER_OUT, UPDATE_USERNAME} from './actions';

const initialState = {
  loggedIn: false,
  userName: 'Dummy'
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_USER_IN.SUCCESS : {
        draft.loggedIn = true;
        break;
      }
      case LOG_USER_OUT.SUCCESS: {
        draft.loggedIn = false;
        break;
      }
      case UPDATE_USERNAME.SUCCESS: {
        draft.userName = action.payload;
        break;
      }
      default: {
        break;
      }
    }
  });
