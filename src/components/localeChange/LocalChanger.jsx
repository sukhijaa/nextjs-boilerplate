import React from 'react';
import { withTranslation } from 'translations/i18n';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Icon from 'components/icons';

@withTranslation('common')
export default class LocaleChanger extends React.Component {
  handleLanguageChange = () => {
    const { i18n } = this.props;
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  render() {
    const { t } = this.props;

    return (
      <ListItem button onClick={this.handleLanguageChange}>
        <ListItemIcon>{Icon.RENDERED_ICONS[Icon.ALLOWED_ICONS.TRANSLATION_ICON]}</ListItemIcon>
        <ListItemText primary={t('changeLang')} />
      </ListItem>
    )
  }
}
