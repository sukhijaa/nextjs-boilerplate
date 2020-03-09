import React from 'react';
import PropTypes from 'prop-types';
import {Link, ROUTE_NAMES} from 'server/routes';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const getSlugFromTitle = (title = '') => {
  let slug = '';
  title
    .trim()
    .split(' ')
    .forEach(part => {
      slug += `_${part}`;
    });

  slug = slug.replace('_', '');

  return slug;
};

const DescriptionCard = props => {
  const {title, description, author} = props;
  const classes = useStyles();

  const slug = getSlugFromTitle(title);

  return (
    <Paper elevation={3} className={classes.paper}>
      <Link route={ROUTE_NAMES.SINGLE_ARTICLE} params={{slug}}>
        <Typography className={classes.titleWrapper} color={'primary'} align={'center'}>
          {title}
        </Typography>
      </Link>
      <Typography title={'Author'} color={"textSecondary"} align={'center'}>
        {`Author : ${author}`}
      </Typography>
      <Typography align={'justify'} className={classes.descriptionWrapper}>
        {description}
      </Typography>
    </Paper>
  );
};

DescriptionCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
};

DescriptionCard.defaultProps = {
  title: 'Default Title',
  description: 'Default Description',
  author: 'Default Author',
};

export default DescriptionCard;
