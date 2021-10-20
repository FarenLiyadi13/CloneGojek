import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';
class ScrollableProducts extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        style={{flexDirection: 'row', paddingLeft: 16}}>
        <ScrollableItem
          title="KFC Ahmad Yani"
          img={require('../../../assets/dummy/go-food-kfc.jpg')}
        />
        <ScrollableItem
          title="Bakmi GM"
          img={require('../../../assets/dummy/go-food-gm.jpg')}
        />
        <ScrollableItem
          title="Martabak Manalagi"
          img={require('../../../assets/dummy/go-food-orins.jpg')}
        />
        <ScrollableItem
          title="Martabak Medan"
          img={require('../../../assets/dummy/go-food-banka.jpg')}
        />
        <ScrollableItem
          title="Ayam Bakar Pak Boss"
          img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
        />
      </ScrollView>
    );
  }
}
export default ScrollableProducts;
