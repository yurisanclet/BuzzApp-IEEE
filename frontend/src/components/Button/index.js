import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button(props) {
  return (
      <View>
          <TouchableOpacity style={styles.button}>
              <Text></Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
      width: 50,
      height: 50,
      backgroundColor: 'purple',
      marginTop: 80
      
  }
})