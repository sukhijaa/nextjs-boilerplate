import React from 'react';
import { updateArticles } from 'containers/articles/actions';
import { getBaseURLFromContext } from 'utils/HTTPRequests';
import HomePage from './HomePage';

function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

Home.getInitialProps = async ({ ctx }) => {
  const { store } = ctx;

  await store.dispatch(
    updateArticles.Request({ base: getBaseURLFromContext(ctx) })
  );

  return {
    namespacesRequired: ['common']
  };
};

export default Home;
