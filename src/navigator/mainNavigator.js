import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList78688Navigator from '../features/ArticleList78688/navigator';
import ArticleList78687Navigator from '../features/ArticleList78687/navigator';
import ArticleList78686Navigator from '../features/ArticleList78686/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList78688: { screen: ArticleList78688Navigator },
ArticleList78687: { screen: ArticleList78687Navigator },
ArticleList78686: { screen: ArticleList78686Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
