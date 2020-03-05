import React from 'react';
import {ROUTE_NAMES} from '../../../server/routes';
import DrawerMenu from 'components/DrawerMenu';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import TranslateIcon from '@material-ui/icons/Translate';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const {LINK, MENU_ITEM, DIVIDER} = DrawerMenu.ALLOWED_TYPES;

const menuOptions = [
  {
    itemType: LINK,
    label: 'Home',
    linkRouteName: ROUTE_NAMES.INDEX,
    icon: <HomeIcon/>
  },
  {
    itemType: LINK,
    label: 'Articles',
    linkRouteName: ROUTE_NAMES.ARTICLES,
    icon: <DescriptionIcon/>
  },
  {
    itemType: LINK,
    label: 'Authors',
    linkRouteName: ROUTE_NAMES.AUTHORS,
    icon: <PersonIcon/>
  },
  {itemType: DIVIDER},
  {
    itemType: LINK,
    label: 'Test Parameter Route',
    icon: <AddIcon/>,
    linkRouteName: ROUTE_NAMES.TEST_SINGLE_ARTICLE,
    linkRouteParams: {
      slug: 'dummy_article_1',
      slug2: 'myslug2',
      slug3: 'myslug3',
      slug4: 'myslug4',
      isTest: true,
    }
  },
  {itemType: DIVIDER},
  {
    itemType: MENU_ITEM,
    label: 'Change Locale',
    icon: <TranslateIcon/>
  },
  {
    itemType: MENU_ITEM,
    label: 'Change Theme',
    icon: <ColorLensIcon/>
  }
];

const DrawerHeader = props => {
  const {children} = props;
  return (
    <DrawerMenu menuItems={menuOptions} menuTitle={'HyperDew NextJS'}>
      {children}
    </DrawerMenu>
  );
};

export default DrawerHeader;
