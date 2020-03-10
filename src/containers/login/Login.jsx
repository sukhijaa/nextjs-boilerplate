import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import {useInjectSaga} from '../../store/injectSaga';
import {REDUCER_STORE_KEY} from './constants';
import saga from './saga';
import {useDispatch} from 'react-redux';
import {logUserIn} from "./actions";

const LoginPage = props => {
  const classes = useStyles();
  useInjectSaga({key: REDUCER_STORE_KEY, saga});

  const [userName, updateUserName] = useState('');
  const [password, updatePassWord] = useState('');

  const handleUpdateUserName = e => updateUserName(e.target.value);
  const handleUpdatePassword = e => updatePassWord(e.target.value);

  const dispatch = useDispatch();

  const handleUserLogin = () => {
    dispatch(logUserIn.Request({userName, password}));
  };

  return (
    <div className={classes.loginFormWrapper}>
      <Paper className={classes.loginPaperWrapper} elevation={3}>
        <TextField
          required
          id="username"
          label="UserName"
          placeholder={'UserName or Email'}
          value={userName}
          onChange={handleUpdateUserName}
          className={classes.textField}
        />
        <TextField
          required
          id="password"
          label="Password"
          placeholder={'Password'}
          value={password}
          onChange={handleUpdatePassword}
          type={'password'}
          className={classes.textField}
        />
        <Button
          size={'large'}
          color={'primary'}
          variant={'contained'}
          onClick={handleUserLogin}
          className={classes.button}
        >
          Login
        </Button>
        <div className={classes.divider} />
        <Button
          size={'large'}
          color={'primary'}
          variant={'contained'}
          className={`${classes.button} ${classes.signUpButton}`}
        >
          Sign Up
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
