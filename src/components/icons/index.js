import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import TranslateIcon from '@material-ui/icons/Translate';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import React from 'react';

const ALLOWED_ICONS = {
  HOME: 'home',
  PERSON: 'personIcon',
  ADDITION_ICON: 'addButton',
  TRANSLATION_ICON: 'translateIcon',
  COLOR_PALLETE: 'colorPallete',
  DESCRIPTION: 'description',
};

const RENDERED_ICONS = {
  [ALLOWED_ICONS.HOME]: <HomeIcon />,
  [ALLOWED_ICONS.COLOR_PALLETE]: <ColorLensIcon />,
  [ALLOWED_ICONS.PERSON]: <PersonIcon />,
  [ALLOWED_ICONS.TRANSLATION_ICON]: <TranslateIcon />,
  [ALLOWED_ICONS.ADDITION_ICON]: <AddIcon />,
  [ALLOWED_ICONS.DESCRIPTION]: <DescriptionIcon />,
};

export default {ALLOWED_ICONS, RENDERED_ICONS};
