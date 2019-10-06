import React from 'react';
import { FlatList,View,Animated} from 'react-native';
import OneCat from './OneCat';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class CatScreen extends React.Component {

    state ={
        onlyCat:this.props.categories
    }
    render(){
    return (
        
        <AnimatedFlatList
        horizontal ={false}
        numColumns = {2}
        data = {this.state.onlyCat}
        renderItem={({item})=>
         <OneCat {...item} 
         gotoProducts = {this.handleTouch}
         Keyprop={item.id}/>}
        keyExtractor={item => item.id}
        scrollEventThrottle={this.props.scrollEventThrottle}
        onScroll={this.props.onScroll}
        contentContainerStyle={this.props.contentContainerStyle}
        />
    );}

handleTouch = (x,name)=> {
    this.props.handleTouch(x,name);  
}
}