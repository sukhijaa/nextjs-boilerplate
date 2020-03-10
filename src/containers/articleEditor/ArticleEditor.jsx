import React from 'react';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('components/tinyMCEEditor'),
  { ssr: false }
)

const ArticleEditor = props => {
  return <DynamicComponentWithNoSSR />;
};

export default ArticleEditor;
