import React, { createRef } from 'react';

import NavigationService from '../services/navigationService';
import createRoutes from './createRoutes';
import DrawerMenuItem from '../containers/components/swipeableDrawer/drawerMenuItem';
import SideMenu from 'react-native-side-menu';

export const drawer = createRef();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.55,
  minimizeFactor: 0.55,
  swipeOffset: 100
};

class AppNavigation extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {

    const NavigationComponent = createRoutes();

    return (
      <SideMenu
        menuPosition={'right'}
        menu={<DrawerMenuItem drawer={drawer} />}>
        <NavigationComponent ref={NavigationService.setTopLevelNavigator} />
      </SideMenu>
    );
  }
}

export default AppNavigation;
