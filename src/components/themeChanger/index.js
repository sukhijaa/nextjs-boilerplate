import React from 'react';
import {
  ThemeChangeLabel,
  ThemeChangerButton,
  ThemeChangerContentWrapper,
  ThemeChangeWrapper,
  ThemeName
} from './components';
import { useTranslation } from 'translations/i18n';
import { changeTheme } from '../../themes/actions';
import { getCurrentTheme } from '../../themes/selector';
import { connect } from 'react-redux';

const ThemeChanger = (props) => {
  const { t } = useTranslation();
  const { currentTheme, changeTheme } = props;
  return (
    <ThemeChangeWrapper>
      <ThemeChangerContentWrapper>
        <ThemeChangeLabel>
          {t('currentTheme')}
        </ThemeChangeLabel>
        :
        <ThemeName>
          {currentTheme}
        </ThemeName>
        <ThemeChangerButton onClick={changeTheme}>
          Change
        </ThemeChangerButton>
      </ThemeChangerContentWrapper>
    </ThemeChangeWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => dispatch(changeTheme())
});

const mapStateToProps = (store) => ({
  currentTheme: getCurrentTheme(store)
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChanger);


