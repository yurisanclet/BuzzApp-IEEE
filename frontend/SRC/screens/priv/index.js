import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function PrivChat() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.myBox}>
        <TouchableOpacity>
          <Text style={styles.myText}> Adicionar contato </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.buttonPrive}>
          <Text style={styles.priveText}>Privado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPubli} onPress={() => navigation.navigate('PubliChat')}>
          <Text style={styles.publiText}>Publico</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.msgBox} alignItems="center">
        <Avatar.Image source={require('/assets/terencio.jpeg')}
              size={50}
              marginBottom={45}
              margin={10}/>
          <Text style={styles.myText}> João Terêncio </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.msgBox} alignItems="center">
        <Avatar.Image source={require('/assets/yuri.png.jpeg')}
              size={50}
              marginBottom={45}
              margin={10}/>
          <Text style={styles.myText}> Yuri dos Santos </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.msgBox} alignItems="center">
        <Avatar.Image source={require('/assets/bianca.jpeg')}
              size={50}
              marginBottom={45}
              margin={10}/>
          <Text style={styles.myText}> Bianca Gallicchio </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.msgBox} alignItems="center">
        <Avatar.Image source={require('/assets/gabriel.png.jpeg')}
              size={50}
              marginBottom={45}
              margin={10}/>
          <Text style={styles.myText}> Gabriel Costa </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.msgBox} alignItems="center">
        <Avatar.Image source={require('/assets/isabele.jpeg')}
              size={50}
              marginBottom={45}
              margin={10}/>
          <Text style={styles.myText}> Isabele Rocha </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.msgBox} alignItems="center">
        <Avatar.Image source={require('/assets/matheus.jpeg')}
              size={50}
              marginBottom={45}
              margin={10}/>
          <Text style={styles.myText}> Matheus Pereira </Text>
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