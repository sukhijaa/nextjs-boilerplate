import React from 'react';
import { getActiveArticle } from './selectors';
import { connect } from 'react-redux';
import {
  ArticleDetailAuthor,
  ArticleDetailDescription,
  ArticleDetailTitle,
  ArticleDetailWrapper
} from './styledComponents';
import { ThemedLayout } from 'components/themedLayout';
import { Header } from 'components/header';
import { useRouter } from 'next/router';

const ArticleDetail = props => {
  const {articleDetail} = props;

  const {query} = useRouter();

  return (
    <ThemedLayout>
      <Header />
      <ArticleDetailWrapper>
        <ArticleDetailTitle>{articleDetail.title}</ArticleDetailTitle>
        <ArticleDetailAuthor>
          Author : {articleDetail.author}
        </ArticleDetailAuthor>
        {query.isTest ? (
          <ArticleDetailAuthor>
            Inside Test Page : Same Component Different Params
          </ArticleDetailAuthor>
        ) : null}
        <ArticleDetailDescription>
          {articleDetail.description}
        </ArticleDetailDescription>
      </ArticleDetailWrapper>
    </ThemedLayout>
  );
};

const mapStateToProps = store => ({
  articleDetail: getActiveArticle(store),
});

ArticleDetail.defaultProps = {
  articleDetail: {
    title: 'No Fetch Dummy Article',
  },
};

export default connect(mapStateToProps)(ArticleDetail);
