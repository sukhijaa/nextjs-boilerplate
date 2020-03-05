import React from 'react';
import {createStructuredSelector} from 'reselect';
import {getAllMenuOptions, getMenuTitle, isDrawerOpen} from './selectors';
import {useSelector, useDispatch} from 'react-redux';
import DrawerMenu from 'components/DrawerMenu';
import {TOGGLE_DRAWER, toggleDrawer} from "./actions";
import {useInjectSaga} from "../../store/injectSaga";
import {REDUCER_STORE_KEY} from "./constants";
import saga from './saga';

const stateSelector = createStructuredSelector({
  menuOptions: getAllMenuOptions,
  menuTitle: getMenuTitle,
  drawerOpen: isDrawerOpen,
});

const DrawerLayout = props => {
  useInjectSaga({key: REDUCER_STORE_KEY, saga});
  const {children} = props;

  const {menuOptions, menuTitle, drawerOpen} = useSelector(stateSelector) || {};
  const dispatch = useDispatch();

  const handleDrawerToggle = () => dispatch(toggleDrawer.Request());

  return (
    <DrawerMenu menuItems={menuOptions} menuTitle={menuTitle} show={drawerOpen} handleMenuToggle={handleDrawerToggle}>
      {children}
    </DrawerMenu>
  );
};

export default DrawerLayout;
