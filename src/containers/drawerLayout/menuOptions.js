import React from 'react';
import {ROUTE_NAMES} from '../../../server/routes';
import DrawerMenu from 'components/DrawerMenu';
import Icons from "components/icons";

// For reference on Option Structure, look into components/DrawerMenu/DrawerMenu.jsx

const doNothing = () => {};

const {LINK, MENU_ITEM, DIVIDER, CHANGE_LOCALE, CHANGE_THEME} = DrawerMenu.ALLOWED_TYPES;

export const DIVIDER_MENU_ITEM = {
  itemType: DIVIDER,
};

export const HOME_MENU_ITEM_PROPS = {
  itemType: LINK,
  label: 'Home',
  linkRouteName: ROUTE_NAMES.INDEX,
  iconName: Icons.ALLOWED_ICONS.HOME
};

export const ARTICLES_MENU_ITEM_PROPS = {
  itemType: LINK,
  label: 'Articles',
  linkRouteName: ROUTE_NAMES.ARTICLES,
  iconName: Icons.ALLOWED_ICONS.DESCRIPTION
};

export const AUTHORS_MENU_ITEM_PROPS = {
  itemType: LINK,
  label: 'Authors',
  linkRouteName: ROUTE_NAMES.AUTHORS,
  iconName: Icons.ALLOWED_ICONS.PERSON
};

export const SINGLE_ARTICLE_TEST_PAGE_MENU = {
  itemType: LINK,
  label: 'Test Parameter Route',
  iconName: Icons.ALLOWED_ICONS.ADDITION_ICON,
  linkRouteName: ROUTE_NAMES.TEST_SINGLE_ARTICLE,
  linkRouteParams: {
    slug: 'dummy_article_1',
    slug2: 'myslug2',
    slug3: 'myslug3',
    slug4: 'myslug4',
    isTest: true,
  },
};

export const ARTICLE_EDITOR = {
  itemType: LINK,
  label: 'Editor',
  iconName: Icons.ALLOWED_ICONS.ADDITION_ICON,
  linkRouteName: ROUTE_NAMES.EDITOR
};

export const CHANGE_LOCALE_MENU_OPTION = {
  itemType: CHANGE_LOCALE,
  label: 'Change Locale',
  iconName: Icons.ALLOWED_ICONS.TRANSLATION_ICON,
  onClick: doNothing,
  identifier: 'localeOption'
};

export const CHANGE_THEME_MENU_OPTION = {
  itemType: CHANGE_THEME,
  label: 'Change Theme',
  iconName: Icons.ALLOWED_ICONS.COLOR_PALLETE,
  onClick: doNothing,
  identifier: 'themeOption'
};
