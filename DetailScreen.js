import React from 'react';
import { View , StyleSheet , TouchableOpacity ,Dimensions, Text ,ImageBackground} from 'react-native';

export default class DetailScreen extends React.Component {

    render(){
        return (
           <View style={{justifyContent:'center' , alignContent:'center',alignItems:'stretch',alignSelf:'stretch'}}>
           <Text>{this.props.navigation.getParam('ProductName')}</Text>
           <Text>{this.props.navigation.getParam('ProductWeight')}</Text>
           <Text>{this.props.navigation.getParam('ProductPrice')}</Text>
           </View>
        );
    }

  }
