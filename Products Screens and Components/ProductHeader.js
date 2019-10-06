import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
  Text,Image,Button,TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Temp extends React.Component{
  render(){
    return(
        <View style={{ flexDirection:'row' ,paddingTop:25, justifyContent: 'space-between' ,backgroundColor: 'rgba(0, 0, 0, .32)'}}>
        
        <View style={{left:0 ,flexDirection:'row' ,}}>
        <TouchableOpacity
        style={{margin:7 , }}
        onPress={this.props.handleback}
          >
                 <Image style={{width:29,height:29}}
        source={require('./../icons/arrow-left-w.png')}/>
        </TouchableOpacity>
        <Text style = {{color:'#FFF' , margin:7 ,fontSize: 20 ,fontWeight:'bold'}}>{this.props.CategName}</Text>
        </View>
        <View/>

        <View style ={{right:0 , flexDirection:'row-reverse' , alignSelf:'flex-end' ,backgroundColor: 'rgba(52, 52, 52, alpha)'}}>
        <TouchableOpacity style={{margin:7 , Left:0,}}>
        <Image style={{width:29,height:29}}
        source={require('./../icons/cart-w.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={{margin:7}} >
        <Image style={{width:29,height:29}}
        source={require('./../icons/magnify-w.png')}/>
        
        </TouchableOpacity>

        </View>

        

        

        </View>
        
        
      )
  }
}
/*<Image style={{width:27,height:27}}
        source={require('./icons/magnify-white.png')}/>*/ 
