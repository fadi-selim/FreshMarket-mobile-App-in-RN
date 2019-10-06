import React from 'react';
import { View , StyleSheet , TouchableOpacity ,Dimensions, Text ,ImageBackground} from 'react-native';

export default class OneCat extends React.Component {

    render(){
        const height =  Math.round((Dimensions.get('window').width)/2);
        return (
    <View  style = {{width :'50%' ,height: height, marginRight:3 , marginTop : 3}}>
    <TouchableOpacity  onPress = {()=>{this.handletouch(this.props.Keyprop ,this.props.name)}}>
    <ImageBackground 
        style={styles.ImageBackground}
        source={{uri:this.props.name==="Vegetables"?'https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-picture-id589415708?k=6&m=589415708&s=612x612&w=0&h=yk6a8hZI3HnGuPgCkJqWjqzmfbGqy9bucx1ZUXkXwA8=':this.props.category_img}}>
     <Text style={styles.details}>{this.props.name}</Text>
    </ImageBackground>
    </TouchableOpacity>
    </View>
        );
    }
handletouch = (x,name) => { this.props.gotoProducts(x,name) }

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
      fontSize:18,
      color:'#FFF',
      fontWeight:'bold',
      paddingLeft:4,
      paddingBottom:2,
      
    },
    
  });
  