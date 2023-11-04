import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MyHeader } from '../components/header';

import db from "../config";

import  firebase from 'firebase';

export default class Earth extends React.Component {

constructor(props) {
super(props)
this.state = {
density : "",
mass:"",
dfs : "",
radius :"",

}
}

async fetchData() { 
  let a,b,c 
  await firebase.database().ref('Planets/Earth/')
  .on("value",function(data){
   a = data.val().mass
   b = data.val().density
   c = data.val().radius
  })
  this.setState({mass:a})
 this.setState({density:b})
 this.setState({radius:c})
}

componentDidMount() {
  this.fetchData();
}

  render() {
    return (
      <View>
        <MyHeader title="Earth" />
        <View
          style={
            styles.container
          }>
          <ImageBackground
            source={require('../assets/starry_background.jpg')}
            style={
            styles.imgBg
            }>
            <Image
              source={require('../assets/earth.jpg')}
              style={styles.ing}
            />
            <Text style={styles.textStyle}>Earth</Text>
            <Text>Mass:{this.state.mass}</Text>
 <Text>Density:{this.state.density}</Text>
 <Text>Radius:{this.state.radius}</Text>
            <Text style={{ color: 'aqua' }}>
              Our home planet is the third planet from the Sun, and the only
              place we know of so far that’s inhabited by living things.While
              Earth is only the fifth largest planet in the solar system, it is
              the only world in our solar system with liquid water on the
              surface. Just slightly larger than nearby Venus, Earth is the
              biggest of the four planets closest to the Sun, all of which are
              made of rock and metal.The name Earth is at least 1,000 years old.
              All of the planets, except for Earth, were named after Greek and
              Roman gods and goddesses. However, the name Earth is a Germanic
              word, which simply means “the ground.”Our atmosphere protects us
              from incoming meteoroids, most of which break up in our atmosphere
              before they can strike the surface.It has one moon.
            </Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  container:{
    flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignitems: 'center',
  },
  imgBg :{  flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              width: '100%',
              height: 700,},
  ing:{
      flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              width: '100%',
              height: 700,
  }

});
