import React from 'react';
import {connect} from 'react-redux';
import {Router, ROUTE_NAMES} from 'server/routes';
import {DEFAULT_POST_LOGIN_REDIRECT} from 'utils/constants';
import {isUserLoggedIn} from 'containers/login/selector';

const RedirectToLogin = (
  nextRedirect = DEFAULT_POST_LOGIN_REDIRECT,
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

      Router.pushRoute(ROUTE_NAMES.LOGIN);

      return null;
    }
  }

  return WrappedComponentClass;
};

export default RedirectToLogin;
