import React, { Component } from 'react';
import {DrawerNavigator} from 'react-native-navigation';
import {
  StyleSheet,
    Image,
    TouchableHighlight,
    View
 
} from 'react-native';

const HomeScreen = "HomeScreen"

export default class MainScreen extends Component {
    
    let drawerLabel = 'Home';
   let drawerIcon = () => {
        <Image source ={require('../images/navmen.png')}>
        </Image>
    }
    
    static navigationOptions = ({Navigation}) => {
        
        return{drawerLabel,drawerIcon};
    }
    
   render() {
    return (<View style={
            flex: 1,
            flexDirection: 'column',
            }>
        <View style={height: 90, flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}>
              <TouchableHighlight style={
            marginLeft: 10,
            marginTop: 20,
           
            }
            onPress = {() =>{
        
                const {navigate} = this.props.navigation;
                navigate('DrawerOpen');
                }}>
                    <Image style={width: 32, height: 32} 
                    source={require('../images/navmen.png')}
                    />
            
            </TouchableHighlight>
            </View>
       <View style={flex: 1, alignItems: 'center', justifyContent: 'center'}>
            <Text style={fontsize: 20}>
            This is Main Screen
            </Text>
            <TouchableHighlight style={
            margin: 20,
            width: 200,
            height: 45,
            padding: 10,
            alignItems: 'center',
            }
            onPress = {() =>{
        
                const {navigate} = this.props.navigation;
                navigate(HomeScreen);
                }}>
                    <Text style={fontsize: 32}>Home Screen Navigate</Text>
            
            </TouchableHighlight>
            </View>
            
  
     
    </View>);
  
}


const styles = StyleSheet.create({
  container: {
        
    width: 100,
      height: 101,
    justifyContent: 'center',
    alignItems: 'center',
  },
 

 
});
