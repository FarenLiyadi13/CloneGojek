import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// component
import Home from './src/containers/pages/Home/index';
import AppNavigator from './src/config/router';

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
