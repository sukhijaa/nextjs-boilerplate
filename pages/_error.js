import React from 'react';
import Error from 'next/error';
import PropTypes from 'prop-types';

const Page = ({ errorCode }) => <Error statusCode={errorCode}/>;

Page.getInitialProps = ({ res, err }) => {
  let errorCode = res ? res.statusCode : null;
  errorCode = errorCode || err ? err.statusCode : 404;

  return {
    errorCode,
    namespacesRequired: []
  };
};

Page.propTypes = {
  errorCode: PropTypes.any
};

Page.defaultProps = {
  errorCode: 500
};

export default Page;
