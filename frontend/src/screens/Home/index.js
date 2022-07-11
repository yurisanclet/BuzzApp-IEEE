import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styleHome';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Buzz</Text>
    </View>    
  );
}

