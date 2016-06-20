/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid,
  TouchableOpacity
} from 'react-native';

class NavigationProject1 extends React.Component{
  render() {
    return (
      <Navigator
      style={styles.container}
      initialRoute={{id: 'second'}}
      renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    //_navigator = navigator;
    switch (route.id) {
      case 'first':
      return (<First navigator={navigator} title="first"/>);
      case 'second':
      return (<Second navigator={navigator} title="second" />);
    }
  }
}

class NavigationProject extends React.Component{
  navSecond(){
    this.props.navigator.push({
      id: 'second'
    })
  }
  render() {
    console.log("came here")
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.navSecond.bind(this)}>
      <Text>Navigate to second screen</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

class Second extends React.Component{
  render() {
    return (
      <View style={styles.container}>
      {/*<ToolbarAndroid style={styles.toolbar}
      title={this.props.title}
      navIcon={require('image!ic_back')}
      onIconClicked={this.props.navigator.pop}
      titleColor={'#FFFFFF'}/>*/}
      <Text>
      Second screen
      </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavigationProject', () => NavigationProject);
