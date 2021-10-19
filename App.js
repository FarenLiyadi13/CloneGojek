import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* seacrh bar */}
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
                source={require('./icon/search.png')}
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
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>

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
              <Image source={require('./icon/gopay.png')} />
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
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Pay
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/nearby.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Nearby
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/topup.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Top Up
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/more.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  More
                </Text>
              </View>
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
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./icon/go-ride.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-RIDE
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-car.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-CAR
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-bluebird.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-BLUEBIRD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-send.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-SEND
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-deals.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-pulsa.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-food.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-more.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 17,
              backgroundColor: '#f2f2f4',
              marginTop: 20,
            }}></View>
          {/* go news */}
          <View>
            <View>
              <Image
                source={require('./dummy/sepak-bola.jpg')}
                style={{height: 496}}
              />
            </View>
            <View></View>
          </View>
        </View>
        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./icon/home-active.png')}
              style={{width: 26, height: 26}}
            />

            <Text
              style={{
                fontSize: 14,
                color: '#545454',
                marginTop: 4,
                color: '#43ab4a',
              }}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./icon/order.png')}
              style={{width: 26, height: 26}}
            />

            <Text style={{fontSize: 14, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./icon/help.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 14, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./icon/inbox.png')}
              style={{width: 26, height: 26}}
            />

            <Text style={{fontSize: 14, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./icon/account.png')}
              style={{width: 26, height: 26}}
            />

            <Text style={{fontSize: 14, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
