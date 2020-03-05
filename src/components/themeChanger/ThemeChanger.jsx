import React from 'react';
import {useTranslation} from 'translations/i18n';
import {changeTheme} from '../../themes/actions';
import {useDispatch} from 'react-redux';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '../icons';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const ThemeChanger = () => {
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const handleThemeChange = () => dispatch(changeTheme());

  return (
    <ListItem button onClick={handleThemeChange}>
      <ListItemIcon>
        {Icon.RENDERED_ICONS[Icon.ALLOWED_ICONS.COLOR_PALLETE]}
      </ListItemIcon>
      <ListItemText primary={t('changeTheme')} />
    </ListItem>
  );
};

export default ThemeChanger;
