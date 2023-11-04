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

export default class Uranus extends React.Component {


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
  await firebase.database().ref('Uranus')
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
        <MyHeader title="Uranus" />
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
              source={require('../assets/uranus.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Uranus</Text>
             <Text style={styles.textStyle}>Mass:{this.state.mass}</Text>
             <Text style={styles.textStyle}>Density:{this.state.density}</Text>
             <Text style={styles.textStyle}>Radius:{this.state.radius}</Text>
           
            
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
