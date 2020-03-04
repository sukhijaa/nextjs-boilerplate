import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { App as ThemedApp } from 'themes/AppTheme';
import { getCurrentTheme } from 'themes/selector';
import themeList from 'themes/themeList';
import color from 'color';
import { connect } from 'react-redux';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = {
  primary: '#f2f2f2',
  ...createMuiTheme()
};

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const ThemedLayout = ({ children, themeName }) => {

  const getActiveTheme = () => {
    let activeThemeName = !themeList[themeName] ? 'main' : themeName;
    if (!themeList[activeThemeName].helper) themeList[activeThemeName].helper = color;

    return themeList[activeThemeName];
  };

  const activeTheme = getActiveTheme();

  return (
    <StyledThemeProvider theme={activeTheme}>
      <GlobalStyle/>
      <MaterialThemeProvider theme={activeTheme}>
        <ThemedApp>
          {children}
        </ThemedApp>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
};

ThemedLayout.defaultProps = {
  theme: 'main'
};

ThemedLayout.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string
};

const mapStateToProps = (store) => ({
  themeName: getCurrentTheme(store)
});

export default connect(mapStateToProps)(ThemedLayout);
