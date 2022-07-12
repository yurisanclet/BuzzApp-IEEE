import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
export function Button(props) {
  return (
    <View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 320,
    height: 50,
    backgroundColor: 'purple',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text:{
    color: '#fff',
    fontSize: 16
  }
})