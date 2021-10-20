import React, {Component} from 'react';
import {View, Image, TextInput} from 'react-native';
const SearchFeature = props => {
  return (
    <View
      style={{
        marginHorizontal: 17,
        flexDirection: 'row',
        paddingTop: 15,
      }}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat?"
          style={{
            borderWidth: 1,
            borderColor: '#e8e8e8',
            borderRadius: 25,
            height: 45,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 14,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Image
          source={require('../../../assets/icon/search.png')}
          style={{position: 'absolute', top: 9, left: 13}}
        />
      </View>
      <View
        style={{
          width: 35,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};
export default SearchFeature;
