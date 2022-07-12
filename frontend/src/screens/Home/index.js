import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styleHome';
import { useNavigation } from '@react-navigation/native';


export function Home() {

  const navigation = useNavigation();


  function pressToGoLogin() {
    navigation.navigate("Login");
  }
  
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Buzz</Text>
      <TouchableOpacity style={styles.button} onPress={pressToGoLogin}>
          <Text style={styles.textButton}>Ir para login</Text>
      </TouchableOpacity>
    </View>    
  );
}
