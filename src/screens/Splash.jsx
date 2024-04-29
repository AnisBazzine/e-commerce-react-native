/*
Make animation of the intro of logo 
*/
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLOR from '../constants/colors';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>laza</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.mainColor,
    width: '100%',
    height: '100%',
  },
  logo: {
    fontSize: 45,
    fontWeight: '600',
    color: COLOR.white,
    letterSpacing: 1.5,
  },
});

/*
import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Text } from "react-native";
import colors from "../styles/Colors";
const Splash = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 2,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/uniLogo.png")}
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
      />
      <Text style={styles.developedByText}>Developed by UnderScore Team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  developedByText: {
    position: "absolute",
    bottom: 25,
    fontSize: 16,
    color: colors.white,
  },
});

export default Splash;

*/