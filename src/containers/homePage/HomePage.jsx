import React from 'react';
import PropTypes from 'prop-types';
import {ThemedLayout} from 'components/themedLayout';
import {connect} from 'react-redux';
import {getAllArticles} from '../articles/selectors';
import {OG_SEO_CONFIG, JSON_LD_SEO_CONFIG} from './seo.config';
import {NextSeo, ArticleJsonLd} from 'next-seo';
import Grid from '@material-ui/core/Grid';
import {DescriptionCard} from 'components/descriptionCard';

function HomePage(props) {
  const {articles} = props;

  return (
    <ThemedLayout>
      <NextSeo {...OG_SEO_CONFIG} />
      <ArticleJsonLd {...JSON_LD_SEO_CONFIG} />
      <Grid item xs={12}>
        <Grid container justify={'center'} spacing={3}>
          {articles.map(article => {
            return (
              <DescriptionCard
                key={article.id}
                title={article.title}
                description={article.description}
                author={article.author}
                id={article.id}
              />
            );
          })}
        </Grid>
      </Grid>
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
