import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {isUserLoggedIn} from 'containers/login/selector';
import Typography from '@material-ui/core/Typography';
import {ROUTE_NAMES, Link} from 'server/routes';
import {logUserOut} from 'containers/login/actions';

const stateSelector = createStructuredSelector({
  isLoggedIn: isUserLoggedIn,
});

const LoginStateButton = props => {
  const {isLoggedIn} = useSelector(stateSelector);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logUserOut.Request());
  };

  if (isLoggedIn) {
    return <Typography onClick={handleLogout}>LogOut</Typography>;
  }

  return (
    <Link route={ROUTE_NAMES.LOGIN}>
      <Typography>LogIn</Typography>
    </Link>
  );
};

export default LoginStateButton;
