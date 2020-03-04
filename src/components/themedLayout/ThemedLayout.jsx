import * as React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { App as ThemedApp } from 'themes/AppTheme';
import { getCurrentTheme } from '../../themes/selector';
import themeList from '../../themes/themeList';
import color from 'color';
import { connect } from 'react-redux';

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

  return (
    <ThemeProvider theme={getActiveTheme()}>
      <ThemedApp>
        <GlobalStyle/>
        {children}
      </ThemedApp>
    </ThemeProvider>
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
