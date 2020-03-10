import React from 'react';
import {ThemedLayout} from '../../components/themedLayout';
import LoginForm from './Login';

const LoginEntry = props => {
  return (
    <ThemedLayout>
      <LoginForm />
    </ThemedLayout>
  );
};

LoginEntry.getInitialProps = ({ctx}) => {
  return {
    namespacesRequired: ['common'],
  };
};

export default LoginEntry;
