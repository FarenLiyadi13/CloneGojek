import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
const ScrollableItem = props => {
  return (
    <View style={{marginRight: 16}}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'pink',
          borderRadius: 10,
        }}>
        <Image
          source={props.img}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
        {props.title}
      </Text>
    </View>
  );
};
export default ScrollableItem;
