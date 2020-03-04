const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr'],
  // localeSubpaths: {
  //   en: 'en',
  //   fr: 'fr'
  // }
});

const LANGUAGE_NAMES = {
  en: 'English',
  fr: 'French'
};

module.exports = {
  appWithTranslation: NextI18NextInstance.appWithTranslation,
  withTranslation: NextI18NextInstance.withTranslation,
  Link: NextI18NextInstance.Link,
  Router: NextI18NextInstance.Router,
  useTranslation: NextI18NextInstance.useTranslation,
  LANGUAGE_NAMES,
  NextI18NextInstance
};

