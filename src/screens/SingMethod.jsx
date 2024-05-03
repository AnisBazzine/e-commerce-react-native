import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function SingMethod() {
  return (
    <View>
      <Text>Let's Get Started</Text>
      <TouchableOpacity>
        <Text>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Gmail</Text>
      </TouchableOpacity>
      <View>
        <Text>Alreday have an account ?</Text>
        <TouchableOpacity>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
