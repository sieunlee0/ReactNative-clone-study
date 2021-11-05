import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1, backgroundColor: "salmon"}}></View>
      <View style={{flex:1, backgroundColor: "teal"}}></View>
      <View style={{flex:1, backgroundColor: "orange"}}></View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'salmon',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // city: {
  //   flex: 1,
  //   backgroundColor: "white",
  // },
  // weather: {
  //   flex: 1,
  //   backgroundColor: "yellow",
  // },
});
