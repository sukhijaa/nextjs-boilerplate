import {actionCreator, actionTypeCreator} from 'store/actionCreators';

export const LOG_USER_IN = actionTypeCreator('login/logUserIn');
export const UPDATE_USERNAME = actionTypeCreator('login/updateUsername');
export const LOG_USER_OUT = actionTypeCreator('login/logUserOut');

export const logUserIn = actionCreator(LOG_USER_IN);
export const updateUserName = actionCreator(UPDATE_USERNAME);
export const logUserOut = actionCreator(LOG_USER_OUT);
