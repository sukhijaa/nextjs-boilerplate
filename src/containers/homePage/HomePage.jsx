import React from 'react';
import PropTypes from 'prop-types';
import {ThemedLayout} from 'components/themedLayout';
import {Header} from 'components/header';
import {DescriptionCard} from 'components/descriptionCard';
import {connect} from 'react-redux';
import {getAllArticles} from '../articles/selectors';
import {OG_SEO_CONFIG, JSON_LD_SEO_CONFIG} from './seo.config';
import {NextSeo, ArticleJsonLd} from 'next-seo';

function HomePage(props) {
  const {articles} = props;

  return (
    <ThemedLayout>
      <NextSeo {...OG_SEO_CONFIG} />
      <ArticleJsonLd {...JSON_LD_SEO_CONFIG} />
      <Header />
      {articles.map(article => {
        return (
          <DescriptionCard
            key={article.id}
            description={article.description}
            title={article.title}
            author={article.author}
          />
        );
      })}
    </ThemedLayout>
  );
}

const mapStateToProps = store => ({
  articles: getAllArticles(store),
});

HomePage.propTypes = {
  articles: PropTypes.array,
};

HomePage.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(HomePage);
