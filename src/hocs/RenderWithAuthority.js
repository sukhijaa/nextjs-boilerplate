import React from 'react';
import {connect} from 'react-redux';
import {DEFAULT_USER_ROLE} from 'utils/constants';
import {isUserLoggedIn} from 'containers/login/selector';

const RenderWithAuthority = (
  requiredRole = DEFAULT_USER_ROLE,
) => WrappedComponent => {
  @connect(store => ({
    isLoggedIn: isUserLoggedIn(store),
  }))
  class WrappedComponentClass extends React.Component {
    render() {
      const {isLoggedIn} = this.props;

      if (isLoggedIn) {
        return <WrappedComponent {...this.props} />;
      }

      return null;
    }
  }

  return WrappedComponentClass;
};

export default RenderWithAuthority;
