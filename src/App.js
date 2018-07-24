import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();
  Navigation.startSingleScreenApp({
  screen: {
    screen: 'helloworld.StartUpScreen', // unique ID registered with Navigation.registerScreen
 // title of the screen as appears in the nav bar 
    
  }
  }); 


