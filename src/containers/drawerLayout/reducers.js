import produce from 'immer';
import {UPDATE_SELECTED_OPTION, UPDATE_MENU_OPTIONS, TOGGLE_DRAWER} from './actions';
import * as MenuOptions from './menuOptions';

const initialState = {
  menuOptions: [
    MenuOptions.HOME_MENU_ITEM_PROPS,
    MenuOptions.ARTICLES_MENU_ITEM_PROPS,
    MenuOptions.AUTHORS_MENU_ITEM_PROPS,
    MenuOptions.ARTICLE_EDITOR,
    MenuOptions.DIVIDER_MENU_ITEM,
    MenuOptions.SINGLE_ARTICLE_TEST_PAGE_MENU,
    MenuOptions.DIVIDER_MENU_ITEM,
    MenuOptions.CHANGE_LOCALE_MENU_OPTION,
    MenuOptions.CHANGE_THEME_MENU_OPTION,
  ],
  selectedOption: {},
  menuTitle: 'HyperDew NextJS',
  isOpen: false
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_SELECTED_OPTION.SUCCESS: {
        draft.menuOptions = action.payload;
        break;
      }
      case UPDATE_MENU_OPTIONS.SUCCESS: {
        draft.selectedOption = action.payload;
        break;
      }
      case TOGGLE_DRAWER.SUCCESS: {
        draft.isOpen = !state.isOpen;
        break;
      }
      default: {
        break;
      }
    }
  });
