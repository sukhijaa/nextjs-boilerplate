import {createSelector} from 'reselect';
import {THEMES_REDUCER_KEY} from './constants';

const selectThemeSubStore = store => store[THEMES_REDUCER_KEY];

export const getCurrentTheme = createSelector(
  selectThemeSubStore,
  themeState => themeState.activeTheme,
);
