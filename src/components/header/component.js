import styled from 'styled-components';

export const HeaderWrapper = styled.div``;

export const HeaderLocaleThemeWrapper = styled.div`
  display: flex;
`;

export const HeaderLinkWrapper = styled.div`
  display: flex;
  height: 35px;
  border: 1px solid white;
  padding: 2px;
  background-color: gray;
`;

export const HeaderSingleLink = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    font-weight: bold;
  }
`;

export const StyledLink = styled.p`
  color: white;
  text-decoration: none;
`;

