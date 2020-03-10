import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(theme => ({
  loginFormWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginPaperWrapper: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    margin: '15px 30px',
    width: '250px'
  },
  button: {
    marginBottom: '10px'
  },
  divider: {
    borderBottom: `1px solid ${theme.colors.borderLight}`,
    margin: '5px 0',
    width: 'calc(100% - 10px)'
  },
  signUpButton: {
    marginTop: '20px',
    marginBottom: '30px'
  }
}));
