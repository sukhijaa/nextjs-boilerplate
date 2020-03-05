import React from 'react';
import PropTypes from 'prop-types';
import DrawerMenu from 'components/DrawerMenu';

const DrawerHeader = props => {
  const {children, menuOptions, menuTitle} = props;
  return (
    <DrawerMenu menuItems={menuOptions} menuTitle={menuTitle}>
      {children}
    </DrawerMenu>
  );
};

DrawerHeader.propTypes = {
  menuOptions: PropTypes.array,
  menuTitle: PropTypes.string
};

DrawerHeader.defaultProps = {
  menuOptions: [],
  menuTitle: ''
};

export default DrawerHeader;
