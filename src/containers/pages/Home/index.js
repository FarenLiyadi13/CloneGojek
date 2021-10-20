import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import GoNews from '../../../components/molecules/GoNews/index.js';
import GopayFeature from '../../../components/molecules/GopayFeature/index.js';
import MainFeature from '../../../components/molecules/MainFeature/index.js';
import SearchFeature from '../../../components/molecules/SearchFeature/index.js';
import Banner from '../../../components/molecules/Banner/index.js';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts/index.js';
import NavBarIcon from '../../../components/molecules/NavBarIcon/index.js';
import NavBar from '../../../containers/organisms/NavBar/index.js';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* seacrh bar */}
          <SearchFeature />
          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            {/* header */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                padding: 14,
              }}>
              <Image source={require('../../../assets/icon/gopay.png')} />
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Rp 50.000
              </Text>
            </View>
            {/* bottom */}
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2f65bd',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}>
              <GopayFeature
                title="pay"
                img={require('../../../assets/icon/pay.png')}
              />
              <GopayFeature
                title="Nearby"
                img={require('../../../assets/icon/nearby.png')}
              />
              <GopayFeature
                title="Top Up"
                img={require('../../../assets/icon/topup.png')}
              />
              <GopayFeature
                title="More"
                img={require('../../../assets/icon/more.png')}
              />
            </View>
          </View>

          {/* main feature */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 5,
              marginTop: 18,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 18,
              }}>
              <MainFeature
                title="GO-RIDE"
                img={require('../../../assets/icon/go-ride.png')}
              />
              <MainFeature
                title="GO-CAR"
                img={require('../../../assets/icon/go-car.png')}
              />
              <MainFeature
                title="GO-BLUEBIRD"
                img={require('../../../assets/icon/go-bluebird.png')}
              />
              <MainFeature
                title="GO-SEND"
                img={require('../../../assets/icon/go-send.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <MainFeature
                title="GO-DEALS"
                img={require('../../../assets/icon/go-deals.png')}
              />
              <MainFeature
                title="GO-PULSA"
                img={require('../../../assets/icon/go-pulsa.png')}
              />
              <MainFeature
                title="GO-FOOD"
                img={require('../../../assets/icon/go-food.png')}
              />
              <MainFeature
                title="MORE"
                img={require('../../../assets/icon/go-more.png')}
              />
            </View>
          </View>
          {/* block abu-abu */}
          <View
            style={{
              height: 17,
              backgroundColor: '#f2f2f4',
              marginTop: 20,
            }}></View>
          {/* go news */}
          <GoNews
            img={require('../../../assets/dummy/sepak-bola.jpg')}
            excerpt="Dimas Drajat selamatkan penalti, Timnas u-23 kalahkan Brunei
          Darrusalam di kandang sendiri"
            category="GO-NEWS"
            judul="READ"
          />

          {/* food banner  */}
          <Banner />
          {/* nearby restoran */}
          <View style={{paddingVertical: 16}}>
            <View style={{height: 15, width: 60, marginHorizontal: 16}}>
              <Image
                source={require('../../../assets/logo/go-food.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
                marginBottom: 16,
                marginHorizontal: 16,
                // backgroundColor: 'red',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                }}>
                Nearby Restaurant
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#61a756',
                }}>
                See All
              </Text>
            </View>
            {/* produk food */}
            <ScrollableProducts />
          </View>
        </ScrollView>
        {/* bottom navigation */}
        <NavBar />
      </View>
    );
  }
}
export default Home;
