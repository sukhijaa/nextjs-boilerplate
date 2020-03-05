import {createSelector} from 'reselect';
import {REDUCER_STORE_KEY} from './constants';

const selectMenuSubstore = store => store[REDUCER_STORE_KEY];

export const getAllMenuOptions = createSelector(
  selectMenuSubstore,
  menuState => menuState.menuOptions,
);

export const getSelectedMenu = createSelector(
  selectMenuSubstore,
  menuState => menuState.selectedOption,
);

export const getMenuTitle = createSelector(
  selectMenuSubstore,
  menuState => menuState.menuTitle
);

export const isDrawerOpen = createSelector(
  selectMenuSubstore,
  menuState => menuState.isOpen
);
