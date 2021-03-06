import { Location } from "expo";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {

  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);

  const ask = async() => {
    await Location.requestForegroundPermissionsAsync();
  }

  useEffect(() => {
    ask();
  }, [])


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Gyeonggi-do</Text>
      </View>
      <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27°</Text>
          <Text style={styles.description}>Cloudy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27°</Text>
          <Text style={styles.description}>Cloudy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27°</Text>
          <Text style={styles.description}>Cloudy</Text>
        </View>
      </ScrollView>
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
    fontSize: 50,
    fontWeight: "600",
  },
  // weather: {
    
  // },
  day: {
    width: SCREEN_WIDTH,
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
