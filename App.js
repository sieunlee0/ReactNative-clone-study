import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text>Gyeonggi-do</Text>
      </View>
      <View style={styles.weather}></View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    flex: 1,
    backgroundColor: "white",
  },
  weather: {
    flex: 1,
    backgroundColor: "teal",
  },
});
