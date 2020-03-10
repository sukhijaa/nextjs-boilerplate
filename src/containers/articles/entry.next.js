import React from 'react';
import { changeActiveArticle } from 'containers/articles/actions';
import { getBaseURLFromContext } from 'utils/HTTPRequests';
import ArticleDetail  from './ArticleDetail';

function ArticleDetails() {
  return <ArticleDetail/>;
}

ArticleDetails.getInitialProps = async ({ ctx }) => {
  const { store, query } = ctx;

  const { slug } = query;

  await store.dispatch(
    changeActiveArticle.Request({ slug, base: getBaseURLFromContext(ctx) })
  );

  return {
    namespacesRequired: ['common'],
    query
  };
};

export default ArticleDetails;
