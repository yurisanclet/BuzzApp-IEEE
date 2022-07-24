import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function App() {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.imgBackground}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textTitle}> Adicionar novo grupo </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 5 }}>
            <TouchableOpacity 
            style={{ marginRight: 5 }}
            onPress={() => navigation.navigate('Menu')}>
              <Icon
                name="chevron-left"
                size={30}
                color="#F5ECFA"
                //style={styles.backStyle}
              ></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              autoCorrect={false}
              placeholderTextColor={'white'}
              placeholder="Buscar"
              style={styles.textInput}></TextInput>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
