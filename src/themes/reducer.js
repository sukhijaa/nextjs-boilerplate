import { CHANGE_THEME } from './actions';
import { produce } from 'immer';

const initState = {
  activeTheme: 'main'
};

/* eslint-disable default-case, no-param-reassign */
const themeReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_THEME:
        // Delete prefixed '@' from the github username
        draft.activeTheme = state.activeTheme === 'main' ? 'inverted' : 'main';
        break;
    }
  });

export default themeReducer;
