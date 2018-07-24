import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
    Image,
  View
} from 'react-native';

import {singlescreen} from '../styles/navigatorStyles';

export default class StartUpScreen extends Component {
    
    static navigatorStyle = singlescreen;
    
    componentWillMount(){
        
        setTimeout(
            () => {
            
          this.props.navigator.push({
          screen: 'helloworld.MainScreen',
        
         
            
});
            
        },3000
        );
    }
  render() {
    return (
        
        <Image source = {(require('../images/hm.png'))} style={styles.backgroundImage}>
        </Image>

    
  
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

 
});
