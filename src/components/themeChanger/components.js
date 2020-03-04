import styled from 'styled-components';

export const ThemeChangeWrapper = styled.div`
  margin: 2px;
  flex-grow: 100;
`;

export const ThemeChangerContentWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 35px;
`;

export const ThemeChangeLabel = styled.div`
  color: ${props => props.theme.colors.textReadonly};
  margin: 0 20px;
`;

export const ThemeName = styled.div`
  font-weight: bold;
  margin-left: 5px;
  width: 100px;
`;

export const ThemeChangerButton = styled.div`
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
  color: ${props => props.theme.colors.main}
`;

