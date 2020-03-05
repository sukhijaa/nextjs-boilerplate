import {actionCreator, actionTypeCreator} from "store/actionCreators";

export const UPDATE_MENU_OPTIONS = actionTypeCreator('drawerLayout/menuOptions');
export const UPDATE_SELECTED_OPTION = actionTypeCreator('drawerLayout/updateSelected');

export const updateMenuOptions = actionCreator(UPDATE_MENU_OPTIONS);
export const updateSelectedMenuOption = actionCreator(UPDATE_SELECTED_OPTION);

