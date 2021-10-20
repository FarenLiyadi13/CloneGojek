import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
const NavBarIcon = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={props.img} style={{width: 26, height: 26}} />

      <Text
        style={{
          fontSize: 14,
          marginTop: 4,
          color: props.active ? '#43ab4a' : '#545454',
        }}>
        {props.title}
      </Text>
    </View>
  );
};
export default NavBarIcon;
