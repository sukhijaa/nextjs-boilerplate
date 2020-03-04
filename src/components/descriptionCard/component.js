import styled from 'styled-components';

export const DescriptionCardWrapper = styled.div`
  margin: 15px;
  border: 1px solid black;
  padding: 5px;
`;

export const DescriptionCardTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-contents: center;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.main}
  }
`;

export const DescriptionCardAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionCardDesc = styled.p`
  text-align: justify;
`;

export const LinkText = styled.span`
  color: ${props => props.theme.colors.main};
  font-size: 24px;
`;
