import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
  Text,Image,Button,TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import { TabViewAnimated, TabBar } from 'react-native-tab-view'; // Version can be specified in package.json
import CategoriesList from './CatList.js';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import {HeaderTitle ,HeaderLeft ,HeaderRight}from './CategHeaders.js'
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = /*252*/0;
const COLLAPSED_HEIGHT = 40 ;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
const slides = [
  {
    key: '1',
    image: require('./../assets/images/firstslide.jpg'),
  },
  {
    key: '2',
    image: require('./../assets/images/secondslide.jpg'),
  },
  {
    key: '3',
    image: require('./../assets/images/slideintro3.jpg')
  },
  {
    key: '4',
    image: require('./../assets/images/thirdslide.jpg'),
  },
];

export default class TabView extends React.Component {

  static navigationOptions = {
    headerRight:<HeaderRight /> ,
    headerLeft:<HeaderLeft />,
     headerTitle:<HeaderTitle />,

  };
  state = {
      index: 0,
      routes: [
        { key: '1', title: '' },
      ],
      scroll: new Animated.Value(0),
    };
  

  _handleIndexChange = index => {
    this.setState({ index });
  };

  _renderHeader = props => {
    const translateY = this.state.scroll.interpolate({
      inputRange: [0, SCROLLABLE_HEIGHT],
      outputRange: [0, -SCROLLABLE_HEIGHT],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <View style={{height:250}}>
          <AppIntroSlider
            renderItem={this._renderItem}
            slides={slides}
            onDone={this._onDone}/>
        </View>
      </Animated.View>
    );
  };

  _renderScene = () => {
    return (
      <CategoriesList
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        categories={this.props.screenProps.categories}
        handleTouch={this.handleTouch}
      />
    );
  };
  handleTouch=(x,name)=>{
    this.props.navigation.navigate('products' , {catID :(+x)>100?(x-100):x  , name:name})
    
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._newrenderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  };


_onDone = () => { }

_renderItem = ({ item }) => {
  return (
  <View style={{height:'30%'}}>
    <View style={{backgroundColor:'#FFFFFF',}}>
      <Image source={item.image} />
    </View>
    </View>
  );
}

_newrenderHeader=()=>{
  return(
    <View style={{height:'40%'}}>
    <AppIntroSlider
    renderItem={this._renderItem}
    slides={slides}
    onDone={this._onDone}/>
    </View>
    );
}



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .32)',
  },
  cover: {
    height: HEADER_HEIGHT,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tabbar: {
    backgroundColor: 'rgba(0, 0, 0, .32)',
    elevation: 0,
    shadowOpacity: 0,
  },
});
