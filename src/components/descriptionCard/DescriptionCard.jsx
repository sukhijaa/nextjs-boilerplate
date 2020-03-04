import React from 'react';
import PropTypes from 'prop-types';
import { Link, ROUTE_NAMES } from 'server/routes';
import {
  DescriptionCardAuthor,
  DescriptionCardDesc,
  DescriptionCardTitle,
  DescriptionCardWrapper,
  LinkText
} from './component';

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

  const slug = getSlugFromTitle(title);

  return (
    <DescriptionCardWrapper>
      <DescriptionCardTitle>
        <Link route={ROUTE_NAMES.SINGLE_ARTICLE} params={{slug}}>
          <LinkText>{title}</LinkText>
        </Link>
      </DescriptionCardTitle>
      <DescriptionCardAuthor>{`Author : ${author}`}</DescriptionCardAuthor>
      <DescriptionCardDesc>{description}</DescriptionCardDesc>
    </DescriptionCardWrapper>
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
