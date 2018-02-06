import React from 'react';
import { View } from 'react-native';

//components
import {Header} from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header/>
      </View>
    );
  }
}

