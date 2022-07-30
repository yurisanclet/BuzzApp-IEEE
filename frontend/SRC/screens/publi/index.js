import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


export default function PubliChat() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.myBox}>
        <TouchableOpacity>
          <Text style={styles.myText}> Adicionar contato </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.buttonPrive} onPress={() => navigation.navigate('PrivChat')}>
          <Text style={styles.priveText}>Privado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPubli}>
          <Text style={styles.publiText}>Publico</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.msgBox} alignItems="center" onPress={() => navigation.navigate('ChatPublico')}>
        <Avatar.Image source={require('../../../assets/global.png')}
              size={50}
              marginBottom={45}
              margin={10}/>
          <Text style={styles.myText}> Chat global </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.addstyle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}