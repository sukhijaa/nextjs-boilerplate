import React, {useState} from 'react';
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
import {MENU_ITEM_TYPES} from "./constants";
import MenuItemForType from "./MenuItemForType";
import useStyles from './styles';

function DrawerMenu(props) {
  const {menuItems, menuTitle} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {menuTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          {menuTitle}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {
          menuItems.map((menuItem, index) => {
            const {label, iconName, onClick, itemType, identifier, linkRouteName, linkRouteParams} = menuItem;

            return (
              <MenuItemForType
                key={identifier || index}
                identifier={identifier}
                itemType={itemType}
                iconName={iconName}
                label={label}
                onClick={onClick}
                linkTypeParams={linkRouteParams}
                linkTypeRouteName={linkRouteName}/>
            );
          })
        }
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
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
      iconName: PropTypes.object,
      onClick: PropTypes.func,
      itemType: PropTypes.oneOf(MENU_ITEM_TYPES),
      identifier: PropTypes.any,
      linkRouteName: PropTypes.string,
      linkRouteParams: PropTypes.object
    })
  ),
};

DrawerMenu.defaultProps = {
  menuTitle: 'HyperDew',
  menuItems: []
};

export default DrawerMenu;
