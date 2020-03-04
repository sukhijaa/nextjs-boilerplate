import { createSelector } from 'reselect';
import { selectThemeSubStore } from 'store/reducers';

export const getCurrentTheme = createSelector(
  selectThemeSubStore,
  themeState => themeState.activeTheme
);
