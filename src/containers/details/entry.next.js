import React from 'react';
import { ThemedLayout } from 'components/themedLayout';
import { Header } from 'components/header';
import DetailsPage from 'containers/details';

function Details() {
  return (
    <ThemedLayout>
      <Header/>
      <DetailsPage/>
    </ThemedLayout>
  );
}

Details.getInitialProps = () => ({
  namespacesRequired: ['common']
});

export default Details;
