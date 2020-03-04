import React from 'react';
import { LANGUAGE_NAMES, withTranslation } from 'translations/i18n';

@withTranslation('common')
export default class LocaleChanger extends React.Component {
  handleLanguageChange = () => {
    const { i18n } = this.props;
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  render() {
    const { t, i18n } = this.props;

    return (
      <main>
        <span className={'current-language'}>{t('currentLang')}</span>:
        <span className={'language-name'}>{LANGUAGE_NAMES[i18n.language]}</span>
        <span className={'change-language'} onClick={this.handleLanguageChange}>
          Change
        </span>
        <style jsx>{`
          main {
            margin: 2px;
            border: 1px solid black;
            display: flex;
            align-items: center;
          }
          .language-name {
            padding: 0 20px;
            font-weight: bold;
          }
          .change-language {
            color: blue;
            cursor: pointer;
          }
        `}</style>
      </main>
    )
  }
}
