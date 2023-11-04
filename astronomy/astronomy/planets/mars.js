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
import firebase from 'firebase'

export default class Mars extends React.Component {

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
  await firebase.database().ref('Planets/Mars/')
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
        <MyHeader title="Mars" />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignitems: 'center',
          }}>
          <ImageBackground
            source={require('../assets/starry_background.jpg')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              width: '100%',
              height: 700,
            }}>
            <Image
              source={require('../assets/mars.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Mars</Text>
             <Text style={styles.textStyle}>Mass:{this.state.mass}</Text>
             <Text style={styles.textStyle}>Density:{this.state.density}</Text>
             <Text style={styles.textStyle}>Radius:{this.state.radius}</Text>
            <Text style={{ color: 'aqua' }}>
              ​Mars is the fourth planet from the Sun – a dusty, cold, desert
              world with a very thin atmosphere. Mars is also a dynamic planet
              with seasons, polar ice caps, canyons, extinct volcanoes, and
              evidence that it was even more active in the past.One day on Mars
              takes a little over 24 hours. Mars makes a complete orbit around
              the Sun (a year in Martian time) in 687 Earth days.Mars has two
              moons named Phobos and Deimos.Mars is known as the Red Planet
              because iron minerals in the Martian soil oxidize, or rust,
              causing the soil and atmosphere to look red.The tallest mountain
              in the solar system, olympus mons, can be found on mars.It is
              named after the roman god Mars.
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
    color: 'aqua',
  },
});
