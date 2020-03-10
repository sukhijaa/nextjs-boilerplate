import React from 'react';
import ArticleEditor from './ArticleEditor';
import {ThemedLayout} from 'components/themedLayout';

const EditorEntry = props => {
  return (
    <ThemedLayout>
      <ArticleEditor />
    </ThemedLayout>
  );
};

EditorEntry.getInitialProps = ({ctx}) => {

  return ({
    namespacesRequired: ['common']
  });
};

export default EditorEntry;
