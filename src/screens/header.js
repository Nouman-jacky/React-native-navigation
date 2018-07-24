import React, {Component} from 'react';
import{DrawerNavigator} from 'react-native-navigation';


import {Text,View,Image,TouchableHighlight} from 'react-native';

export default class header extends Component {
    
    
    render(){
        
        return({
            
            <View style = {height: 90, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}>
               
               <TouchableHighlight style={marginLeft: 10, marginTop: 20}
               onPress = {() => { 
                    this.props.navigationOptions.navigate("DrawerOpen");
                    const {navigate} = this.props.navigation;
                    navigate('DrawerOpen');
                        }}>
                            
                    <Image style={width:32, height: 32}
                        source={require(../images/navmen.png)}

                        />
                            
               </TouchableHighlight>
            </View>
            
        });
    }
}