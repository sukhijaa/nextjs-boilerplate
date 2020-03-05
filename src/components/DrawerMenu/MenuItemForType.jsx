import React from 'react';
import PropTypes from 'prop-types';
import {ALLOWED_MENU_ITEMS, MENU_ITEM_TYPES} from './constants';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {Link, ROUTE_NAMES} from 'server/routes';
import Icons from 'components/icons';
import {LocaleChanger} from "components/localeChange";
import ThemeChanger from "components/themeChanger";

const MenuItemForType = props => {
  const {
    itemType,
    label,
    iconName,
    linkTypeParams,
    linkTypeRouteName,
    onClick,
    identifier,
  } = props;

  const icon = Icons.RENDERED_ICONS[iconName] || null;

  const handleMenuItemClick = () => onClick(identifier);

  switch (itemType) {
    case ALLOWED_MENU_ITEMS.DIVIDER: {
      return <Divider />;
    }
    case ALLOWED_MENU_ITEMS.MENU_ITEM: {
      return (
        <ListItem button key={label} onClick={handleMenuItemClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      );
    }
    case ALLOWED_MENU_ITEMS.LINK: {
      return (
        <Link route={linkTypeRouteName} params={linkTypeParams}>
          <ListItem button key={label}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label}/>
          </ListItem>
        </Link>
      );
    }
    case ALLOWED_MENU_ITEMS.CHANGE_LOCALE: {
      return <LocaleChanger/>
    }
    case ALLOWED_MENU_ITEMS.CHANGE_THEME: {
      return <ThemeChanger/>
    }
  }
};

MenuItemForType.propTypes = {
  itemType: PropTypes.oneOf(MENU_ITEM_TYPES),
  label: PropTypes.string,
  onClick: PropTypes.func,
  iconName: PropTypes.string,
  linkTypeRouteName: PropTypes.string,
  linkTypeParams: PropTypes.object,
  identifier: PropTypes.any,
};

MenuItemForType.defaultProps = {
  itemType: ALLOWED_MENU_ITEMS.DIVIDER,
  label: '',
  onClick: () => {},
  iconName: '',
  linkTypeRouteName: ROUTE_NAMES.INDEX,
  linkTypeParams: {},
  identifier: 0,
};

export default MenuItemForType;
