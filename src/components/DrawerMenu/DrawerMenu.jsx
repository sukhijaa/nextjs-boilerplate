import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {MENU_ITEM_TYPES} from './constants';
import MenuItemForType from './components/MenuItemForType';
import useStyles from './styles';
import {Link, ROUTE_NAMES} from 'server/routes';

function DrawerMenu(props) {
  const {menuItems, menuTitle, handleMenuToggle, show, loginComponent} = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {[classes.appBarShift]: show})}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenuToggle}
            edge="start"
            className={clsx(classes.menuButton, show && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link route={ROUTE_NAMES.INDEX}>
            <Typography variant="h6" noWrap className={classes.cursorPointer}>
              {menuTitle}
            </Typography>
          </Link>
          {
            <div className={classes.loginComponent}>
              {loginComponent}
            </div>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={show}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {menuTitle}
          <IconButton onClick={handleMenuToggle}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {menuItems.map((menuItem, index) => {
          const {
            label,
            iconName,
            onClick,
            itemType,
            identifier,
            linkRouteName,
            linkRouteParams,
          } = menuItem;

          return (
            <MenuItemForType
              key={identifier || index}
              identifier={identifier}
              itemType={itemType}
              iconName={iconName}
              label={label}
              onClick={onClick}
              linkTypeParams={linkRouteParams}
              linkTypeRouteName={linkRouteName}
            />
          );
        })}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: show,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
  );
}

DrawerMenu.propTypes = {
  menuTitle: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      iconName: PropTypes.string,
      onClick: PropTypes.func,
      itemType: PropTypes.oneOf(MENU_ITEM_TYPES),
      identifier: PropTypes.any,
      linkRouteName: PropTypes.string,
      linkRouteParams: PropTypes.object,
    }),
  ),
  handleMenuToggle: PropTypes.func,
  show: PropTypes.bool,
  loginComponent: PropTypes.element,
};

DrawerMenu.defaultProps = {
  menuTitle: 'HyperDew',
  menuItems: [],
  handleMenuToggle: () => {},
  show: false,
  loginComponent: null
};

export default DrawerMenu;
