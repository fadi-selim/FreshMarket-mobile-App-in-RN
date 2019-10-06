import React from 'react';
import { View , StyleSheet , TouchableOpacity ,Dimensions, Text,Image,ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {color} from './../Colors.js'
export function HeaderRight(props) {
  return (
        <View style ={{flexDirection:'row-reverse'}}>
        <TouchableOpacity style={{marginLeft:20 ,marginRight:20, Left:0,}}>
        <Image style={{width:29,height:29}}
        source={require('./../icons/cart-b.png')}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginLeft:0}} >
        <Image style={{width:29,height:29}}
        source={require('./../icons/magnify-b.png')}/>
        </TouchableOpacity>
        </View>)
}

export function HeaderLeft(props) {
  return (
         <TouchableOpacity style={{marginLeft:20}} >
        <Image style={{width:29,height:29}}
        source={require('./../icons/menu-b.png')}/>
        </TouchableOpacity>
)
}

export function HeaderTitle(props) {
  return (
         <Text 
     style = {{ fontSize: 20 ,fontWeight:'bold'}}>
     Categories
     </Text>
)
}



