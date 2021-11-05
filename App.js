import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Gyeonggi-do</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27°</Text>
          <Text style={styles.description}>Cloudy</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
  },
  city: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
  },
  cityName: {
    color: "white",
    fontSize: 40,
    fontWeight: "600",
  },
  weather: {
    flex: 2,
  },
  day: {
    flex: 1,
    alignItems: "center",
    
  },
  temp: {
    fontSize: 150,
    fontWeight: "600",
    marginTop: 20,
    color: "white",
  },
  description: {
    marginTop: -20,
    fontSize: 70,
    color: "white",
  },
});
