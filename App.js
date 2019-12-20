import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableHighlight onPress={() => Alert.alert('Simple Button pressed')}>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: 'http://www.leparisien.fr/resizer/74wMQIeXKLDUKuKvSzJQME_0ULg=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/KNVYKZBDTTOXNO37FEVDTD5DJU.jpg'}}
          />
        </TouchableHighlight>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    );
  }
}

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
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
