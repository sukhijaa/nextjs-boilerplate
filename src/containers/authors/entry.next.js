import React from 'react';
import { getAllAuthors } from './actions';
import { getBaseURLFromContext } from 'utils/HTTPRequests';
import Authors  from './Authors';

function AuthorsEntry() {
  return <Authors/>;
}

AuthorsEntry.getInitialProps = async ({ ctx }) => {
  const { store, query } = ctx;

  const { slug } = query;

  await store.dispatch(
    getAllAuthors.Request({ slug, base: getBaseURLFromContext(ctx) })
  );

  return {
    namespacesRequired: ['common'],
    query
  };
};

export default AuthorsEntry;
