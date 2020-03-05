import React from 'react';
import PropTypes from 'prop-types';
import {ALLOWED_MENU_ITEMS, MENU_ITEM_TYPES} from './constants';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {Link, ROUTE_NAMES} from 'server/routes';

const MenuItemForType = props => {
  const {
    itemType,
    label,
    icon,
    linkTypeParams,
    linkTypeRouteName,
    onClick,
    identifier,
  } = props;

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
  }
};

MenuItemForType.propTypes = {
  itemType: PropTypes.oneOf(MENU_ITEM_TYPES),
  label: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  linkTypeRouteName: PropTypes.string,
  linkTypeParams: PropTypes.object,
  identifier: PropTypes.any,
};

MenuItemForType.defaultProps = {
  itemType: ALLOWED_MENU_ITEMS.DIVIDER,
  label: '',
  onClick: () => {},
  icon: null,
  linkTypeRouteName: ROUTE_NAMES.INDEX,
  linkTypeParams: {},
  identifier: 0,
};

export default MenuItemForType;
