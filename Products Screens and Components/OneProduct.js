import React from 'react';
import { View , StyleSheet , TouchableOpacity ,Dimensions, Text ,ImageBackground} from 'react-native';
import { Ionicons,MaterialIcons} from '@expo/vector-icons';
import {color} from './../Colors.js'
function AddButton(props) {
  if (props.pressed)
  {return <MaterialIcons name="check-circle" size={34} color={color.green} />}
  else {return <MaterialIcons name="add-circle" size={34} color={color.grey} />}

}
export default class OneProduct extends React.Component {

  state={
    pressed:false,
  }
    render(){
        const height =  Math.round((Dimensions.get('window').width)/2);
        return (
    <View  style = {{width :'50%' ,height: height, marginRight:3 , marginTop : 3}}>
    <TouchableOpacity  onPress = {()=>{this.handletouch(this.props.name,this.props.weight,this.props.price)}}>
    <ImageBackground 
        style={styles.ImageBackground }
        source={{uri:this.props.product_img}}>
        <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
          <View>
     <Text style={styles.product}>{this.props.name}</Text>
     <Text style={styles.details}>{this.props.weight}</Text>
     <Text style={styles.details}>{this.props.price}</Text>
     </View>
     <TouchableOpacity
        style={{alignSelf:'flex-end' , margin:9}}
        onPress={this.changePress}>
          <AddButton pressed={this.state.pressed}
          />
          
          
        </TouchableOpacity>
        </View>
        
    </ImageBackground>
    </TouchableOpacity>
    </View>
        );
    }
handletouch = (x,y,z) => { this.props.gotoOneItem(x,y,z) }


changePress =() =>{
  this.setState(prevState => ({pressed:!prevState.pressed}))
}

  }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ImageBackground: {
      width: '100%', 
      height: '100%',
      justifyContent:'flex-end',

    },
    details:{
      fontSize:13,
      color:'#000',
      fontWeight:'bold',
      paddingLeft:4, 
    },
    product:{
      fontSize:17,
      color:'#000',
      fontWeight:'bold',
      paddingLeft:4, 
    }
  });
  
