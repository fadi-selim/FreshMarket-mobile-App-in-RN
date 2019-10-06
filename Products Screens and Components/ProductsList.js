import React from 'react';
import { FlatList, Text, View ,Animated ,Button ,Dimensions} from 'react-native';
import {fetchProducts} from './../api.js'
import OneProduct from './OneProduct.js'
import {color} from './../Colors.js'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class ProductsScreen extends React.Component {
  /*static navigationOptions = {
    title: 'Home',
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    }
  };*/
   /*static navigationOptions = {
    title: 'Home',
  };*/

  state = {
    categoryID :null,
    Products:null
  }
  componentDidMount() {
    this.setState({categoryID:this.props.CategID})
    this.getProducts()

 }

 getProducts = async () => {
  let temp1 = await fetchProducts(this.props.CategID)
    temp1=temp1.products
    let temobj = [...temp1]
    temobj.map(item=>item.id=(+item.id)+100)
    let temp2 = await fetchProducts(this.props.CategID)
    temp2=temp2.products
    const Products = temp1.concat(temp2)
    this.setState({Products})
    /*For One Time Display*/
   /*const Products = await fetchProducts(this.props.CategID)
   this.setState({Products:Products.products})*/
 }
render(){
  return (
    <View>
    <AnimatedFlatList
    style={{marginBottom:35}}
    scrollEventThrottle={this.props.scrollEventThrottle}
    onScroll={this.props.onScroll}
    contentContainerStyle={this.props.contentContainerStyle}
    horizontal ={false}
    numColumns = {2}
    data = {this.state.Products}
    renderItem={({item})=>  (<OneProduct {...item}  gotoOneItem = {this.handleTouch}  Keyprop={item.id}/>)}
    keyExtractor={item => item.id}
    />

    <View style={{backgroundColor: '#488848',position:'absolute',bottom:0,flexDirection:'row',width:'100%' ,height : 35}}>
    <View style={{flex:1}}><Button color = {color.green} style = {{flex:1}} title ="Filter"/></View>
    <View style={{flex:1}}><Button color = {color.green} style = {{flex:1}} title ="Sort"/></View>
    </View>
    </View>
  );}
  handleTouch = (x,y,z)=> {
    this.props.handleTouch(x,y,z)
}
}
