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
export default class Mercury extends React.Component {

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
  await firebase.database().ref('Planets/Mercury/')
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
        <MyHeader title="Mercury" />
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
              source={require('../assets/Mercury.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style = { styles.textStyle}>Mercury</Text>
              <Text style={styles.textStyle}>Mass:{this.state.mass}</Text>
             <Text style={styles.textStyle}>Density:{this.state.density}</Text>
             <Text style={styles.textStyle}>Radius:{this.state.radius}</Text>
            <Text style = {{color : 'aqua'}}>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system .Mercury can orbit around the sun in 88 Earth days. A day on mercury takes 59 Earth days.it is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon.It also lacks any moons.Daytime Temperatures can reach 430 degrees Celsius (800 degrees Fahrenheit) and drop to -180 degrees Celsius (-290 degrees Fahrenheit) at night. It is unlikely life (as we know it) could survive on this planet.The planet is named after the roman god Mercury.</Text>
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
    textAlign : 'center',
    color : 'aqua'
  },
});