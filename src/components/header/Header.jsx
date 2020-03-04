import React from 'react';
import {
  HeaderLocaleThemeWrapper,
  HeaderWrapper,
} from './component';
import ThemeChanger from 'components/themeChanger';
import {LocaleChanger} from 'components/localeChange';
import {Link, ROUTE_NAMES} from 'server/routes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const routes = [
  {label: 'Home', name: ROUTE_NAMES.INDEX},
  {label: 'Articles', name: ROUTE_NAMES.ARTICLES, params: {}},
  {label: 'Details', name: ROUTE_NAMES.DETAILS, params: {}},
  {label: 'Authors', name: ROUTE_NAMES.AUTHORS},
  {
    label: 'Test Route',
    name: ROUTE_NAMES.TEST_SINGLE_ARTICLE,
    params: {
      slug: 'dummy_article_1',
      slug2: 'myslug2',
      slug3: 'myslug3',
      slug4: 'myslug4',
      isTest: true,
    },
  },
];

const Header = props => {
  return (
    <HeaderWrapper>
      <HeaderLocaleThemeWrapper>
        <ThemeChanger />
        <LocaleChanger />
      </HeaderLocaleThemeWrapper>
      <AppBar position={'static'}>
        <Tabs variant={'fullWidth'}>
          {routes.map(route => (
            <Link route={route.name} params={route.params} key={route.name}>
              <Tab label={route.label} />
            </Link>
          ))}
        </Tabs>
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;
