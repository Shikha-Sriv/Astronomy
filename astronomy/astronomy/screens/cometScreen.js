import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { MyHeader } from '../components/header';

export default class Comet extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Astronomy" />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent:'center',
            alignitems:'center', 
          }}>
          <ImageBackground
            source={require('../assets/starry_background.jpg')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', width:'100%', height:450 }}>
            <TouchableOpacity style={styles.startButton}>
              <Text>Start</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startButton: {
    flex:1,
    flexDirection:'space-between',
    justifyContent:'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#1eb7e6',
    borderRadius: 10,
    marginTop:200,
    width: 100,
    padding: 10,
  },
});