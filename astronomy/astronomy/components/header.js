import React from 'react';
import { Header, Icon } from 'react-native-elements';

export const MyHeader = (props) => {
  return (
    <Header
      leftComponent = {
        <Icon name = "arrow-left" type = "font-awesome"
        onPress = {()=> this.props.navigation.goBack()}
        />
      }
      centerComponent={{
        text: props.title,
        style: { color: '#1eb7e6', fontSize: 20, fontWeight: 'bold' },
      }}
      rightComponent={
        <Icon name = "home" 
        onPress = {()=> this.props.navigation.navigate('Start')}
        />}
      backgroundColor = "purple"
    />
  );
};
