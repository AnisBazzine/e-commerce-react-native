import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function BackHeader({ navigation, title }) {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
