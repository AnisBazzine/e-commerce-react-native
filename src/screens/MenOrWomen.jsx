/*
tasks: 
Navigation of SKip 
use Button component to use it again
*/
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import COLOR from '../constants/colors';
import MenChoisse from '../assets/MenBackground.png';
import WomenChoisse from '../assets/WomenBack.jpg';

export default function MenOrWomen() {
  const [select, setSelect] = useState(0);
  const imageBack = select ? WomenChoisse: MenChoisse;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          zIndex: -1,
          position: 'relative',
        }}
        source={imageBack}
      ></ImageBackground>
      <View style={styles.boxChoise}>
        <Text style={styles.boxTitle}>Look Good, Feel Good</Text>
        <Text style={styles.boxDesc}>
          Create your indivdual & unique style and look amazing everyday
        </Text>
        <View
          style={{
            // backgroundColor: COLOR.primary,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'stretch',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setSelect(0);
              console.log('Men selected', select);
            }}
            style={[
              styles.buttonChange,
              {
                backgroundColor: select ? COLOR.mainColor : COLOR.whitePrimary1,
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color: select == 0 ? COLOR.gray : COLOR.white,
                },
              ]}
            >
              Men
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelect(1), console.log('Women selected', select);
            }}
            style={[
              styles.buttonChange,
              {
                backgroundColor: select ? COLOR.whitePrimary1 : COLOR.mainColor,
                color: select ? COLOR.white : COLOR.gray,
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color: select ? COLOR.gray : COLOR.white,
                },
              ]}
            >
              Women
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonSkip}
          onPress={() => console.warn('Skip button')}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.mainColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  boxChoise: {
    backgroundColor: COLOR.white,
    width: '90%',
    height: 244,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
  },
  boxTitle: {
    color: COLOR.black,
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: -0.187,
    marginTop: 25,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  boxDesc: {
    color: COLOR.gray,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 25,
  },
  buttonChange: {
    // backgroundColor: select ? 'blue' : 'green',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
    color: COLOR.gray,
  },
  buttonSkip: {
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
    // padding: 10,
    marginTop: 10,
    height: 50,
  },
});
