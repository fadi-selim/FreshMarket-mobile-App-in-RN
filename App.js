
import React from 'react';
import { StyleSheet, Text, View , Dimensions,Image , ImageBackground} from 'react-native';
import {fetchCategories} from './api.js'
import CatScreen from './Categories Screens and Components/CategoriesScreen.js'
import ProductsScreen from './Products Screens and Components/ProductScreen.js'
import DetailScreen from './DetailScreen.js'
import AppIntroSlider from 'react-native-app-intro-slider';
import { createAppContainer, createStackNavigator} from 'react-navigation';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';

const MainStack = createStackNavigator({
  categories:CatScreen,
  products:ProductsScreen,
  productDetail:DetailScreen,
},{initialRouteName:'categories'})

const Allapp = createAppContainer(MainStack)

const slides = [
  {
    key: '1',
    text: 'Intro ',
    image: require('./assets/images/slideintro1.png'),
  },
  {
    key: '2',
    text: '',
    image: require('./assets/images/slideintro2.jpg'),
  },
  {
    key: '3',
    text: 'Welcome',
    image: require('./assets/images/slideintro3.jpg'),
  }
];


export default class App extends React.Component {
  state ={
    categories : null ,  
    showRealApp: false,
  }
  
  componentDidMount() { 
     this.getCategories()  
  }

  getCategories = async () => {
    const temp1 = await fetchCategories()
    temp1.map(item=>{delete item.products})
    let temobj = [...temp1]
    temobj.map(item=>item.id=(+item.id)+100)
    const temp2 = await fetchCategories()
    temp2.map(item=>{delete item.products})
    const categories = temp1.concat(temp2)
    this.setState({categories})
    
  }
  

_onDone = () => {
  this.setState({ showRealApp: true });
}
render() {
  if (this.state.showRealApp) {
    return <Allapp screenProps = {{categories:this.state.categories}}/>;
  } else {
    return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
  }
}
_renderItem = ({ item }) => {
  
  return (
    <View style={{height:'50%'}}>
    <View style={{height:'50%'}}>
      <ImageBackground style={styles.image} source={item.image} />
      <Text style={{textAlignVertical:'center' , alignSelf:'center',color:'white' ,fontSize:50}}>{item.text}</Text>
    </View>
    </View>
  );
}


}
const styles = StyleSheet.create({
  image :{
    width:'100%',
    height:'200%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    width: '100%', 
    height: '100%'
  },
  
});
