import React from 'react';
import DrawerHeader from 'components/drawerHeader';
import {useInjectReducer} from "../../store/injectReducer";
import {REDUCER_STORE_KEY} from "./constants";
import MenuOptionsReducer from './reducers';
import {createStructuredSelector} from "reselect";
import {getAllMenuOptions, getMenuTitle} from "./selectors";
import {useSelector} from "react-redux";

const stateSelector = createStructuredSelector({
  menuOptions: getAllMenuOptions,
  menuTitle: getMenuTitle
});

const DrawerLayout = props => {
  const {children} = props;

  const {menuOptions, menuTitle} = useSelector(stateSelector) || {};

  return <DrawerHeader menuOptions={menuOptions} menuTitle={menuTitle}>{children}</DrawerHeader>;
};

export default DrawerLayout;
