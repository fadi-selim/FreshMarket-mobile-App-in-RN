import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
} from 'react-native';
import { Constants } from 'expo';
import { TabViewAnimated, TabBar } from 'react-native-tab-view'; // Version can be specified in package.json
import ProductList from './ProductsList.js';
import {getImageURi} from './../api.js'
import Header from './ProductHeader.js'
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = 300;
const COLLAPSED_HEIGHT = 62 ;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
//let uril = 'https://static.mathem.se/shared/images/products/large/tomat-kvist-eko-500g-klass1-2.jpg';
let uril = null
export default class TabView extends React.Component {
  static navigationOptions = {
        header: null,
      
  };

  state = {
      index: 0,
      routes: [
        { key: '1', title: this.props.navigation.getParam('name') },
        { key: '2', title: 'The Same' },
      ],
      scroll: new Animated.Value(0),
      uril:null,
    };
  componentDidMount() {
    this.getUri()
 }

 getUri = async () => {
   uril = await getImageURi(this.props.navigation.getParam('catID'))
   this.setState({uril})
 }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  _renderHeader = props => {
    const translateY = this.state.scroll.interpolate({
      inputRange: [0, SCROLLABLE_HEIGHT],
      outputRange: [0, -SCROLLABLE_HEIGHT],
      extrapolate: 'clamp',
    });
///{uri:this.state.uril}
    return (
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <ImageBackground
          source={{uri:this.state.uril}}
          style={styles.cover}> 
          <Header 
          CategName={this.props.navigation.getParam('name')}
          handleback={()=>{this.props.navigation.navigate('categories')}}/>
          <View style={styles.overlay} />
          <TabBar {...props} style={styles.tabbar} />
        </ImageBackground>
      </Animated.View>
    );
  };

  _renderScene = () => {
    return (
      <View>
      <ProductList
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        handleTouch={this.handleTouch}
        CategID={this.props.navigation.getParam('catID')}
      />
      </View>
    );
  };
  handleTouch = (x,y,z)=> {
    this.props.navigation.navigate('productDetail' , {ProductName :x , ProductWeight :y , ProductPrice:z})
}
  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
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
