import React from 'react';
import dynamic from 'next/dynamic';
import {RedirectToLogin} from 'hocs';

const DynamicComponentWithNoSSR = dynamic(
  () => import('components/tinyMCEEditor'),
  {ssr: false},
);

const ArticleEditor = props => {
  return <DynamicComponentWithNoSSR />;
};

export default RedirectToLogin()(ArticleEditor);
