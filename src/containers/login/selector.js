import {createSelector} from 'reselect';
import {REDUCER_STORE_KEY} from './constants';

const selectLoginSubStore = store => store[REDUCER_STORE_KEY];

export const isUserLoggedIn = createSelector(
  selectLoginSubStore,
  loginState => loginState.loggedIn,
);

export const getUserName = createSelector(
  selectLoginSubStore,
  loginState => loginState.userName,
);
