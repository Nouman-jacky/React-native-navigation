import { Navigation } from 'react-native-navigation';
import { DrawerNavigation } from 'react-native-navigation';

import StartUpScreen from './StartUpScreen';
import MainScreen from './MainScreen';
import Home from './Home';
import Info from './Info';

export function registerScreens() {
  Navigation.registerComponent('helloworld.StartUpScreen', () => StartUpScreen);
    Navigation.registerComponent('helloworld.MainScreen', () => MainScreen);
    Navigation.registerComponent('helloworld.Home', () => Home);
    Navigation.registerComponent('helloworld.Info', () => Info);
  }