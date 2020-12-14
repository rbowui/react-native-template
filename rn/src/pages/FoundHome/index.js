import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>发现首页</Text>
        </View>
      </SafeAreaView>
    );
  }
}