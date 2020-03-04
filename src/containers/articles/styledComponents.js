import styled from 'styled-components';

const alignCentre = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArticleDetailWrapper = styled.div`
  margin: 20px 20%;
`;

export const ArticleDetailTitle = styled.h1`
  color: ${props => props.theme.colors.main};
  ${alignCentre}
`;

export const ArticleDetailAuthor = styled.p`
  font-size: 18px;
  ${alignCentre}
`;

export const ArticleDetailDescription = styled.p`
  font-size: 14px;
  text-align: justify;
`;

