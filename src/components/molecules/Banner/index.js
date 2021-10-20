import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
const Banner = () => {
  return (
    <View
      style={{
        padding: 16,
        borderBottomColor: '#e8e9ed',
        borderBottomWidth: 1,
        marginBottom: 20,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/food-banner.jpg')}
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            //   backgroundColor: 'red',
            width: '100%',
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 16,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 0,
              }}>
              Free GO-FOOD voucher
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'white',
              }}>
              Quick, before they run out!
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 12}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61a756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Banner;
