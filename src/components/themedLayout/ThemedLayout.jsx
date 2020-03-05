import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import {getCurrentTheme} from 'themes/selector';
import themeList from 'themes/themeList';
import color from 'color';
import {connect} from 'react-redux';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {ThemeProvider as MaterialThemeProvider} from '@material-ui/core/styles';
import DrawerLayout from 'containers/drawerLayout';
import {useInjectReducer} from 'store/injectReducer';
import {REDUCER_STORE_KEY} from 'containers/drawerLayout/constants';
import MenuOptionsReducer from 'containers/drawerLayout/reducers';

/**
 * Responsible for injecting Styled Component Theme and Material UI Theme into app
 * Also, will select which theme to apply and which layout to apply.
 * Default is DrawerLayout
 */
const ThemedLayout = ({children, themeName}) => {
  const getActiveTheme = () => {
    let activeThemeName = !themeList[themeName] ? 'main' : themeName;
    if (!themeList[activeThemeName].helper)
      themeList[activeThemeName].helper = color;

    return themeList[activeThemeName];
  };

  const activeTheme = getActiveTheme();

  return (
    <StyledThemeProvider theme={activeTheme}>
      <MaterialThemeProvider theme={activeTheme}>
        <CssBaseline />
        <DrawerLayout>{children}</DrawerLayout>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
};

ThemedLayout.defaultProps = {
  theme: 'main',
};

ThemedLayout.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.string,
};

const mapStateToProps = store => ({
  themeName: getCurrentTheme(store),
});

export default connect(mapStateToProps)(ThemedLayout);
