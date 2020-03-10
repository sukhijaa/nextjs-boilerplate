import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
import Button from '@material-ui/core/Button';

const LoginPage = props => {
  const classes = useStyles();

  return (
    <div className={classes.loginFormWrapper}>
      <Paper className={classes.loginPaperWrapper} elevation={3}>
        <TextField
          required
          id="username"
          label="UserName"
          placeholder={'UserName or Email'}
          className={classes.textField}
        />
        <TextField
          required
          id="password"
          label="Password"
          placeholder={'Password'}
          type={'password'}
          className={classes.textField}
        />
        <Button size={'large'} color={'primary'} variant={'contained'} className={classes.button}>
          Login
        </Button>
        <div className={classes.divider}/>
        <Button size={'large'} color={'primary'} variant={'contained'} className={`${classes.button} ${classes.signUpButton}`}>
          Sign Up
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
