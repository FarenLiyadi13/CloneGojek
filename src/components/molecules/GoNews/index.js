import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
const GoNews = props => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 16,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={props.img}
          style={{
            height: 170,
            width: '100%',
            borderRadius: 8,
          }}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.3,
            borderRadius: 8,
          }}></View>
        <View
          style={{
            height: 15,
            width: 60,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          // marginBottom: 20,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
          {props.category}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            marginBottom: 11,
            color: '#7a7a7a',
          }}>
          {props.excerpt}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61a756',
            paddingHorizontal: 12,
            paddingVertical: 11,
            alignSelf: 'flex-end',
            borderRadius: 4,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            {props.judul}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GoNews;
