import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import api from '../../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function loginSubmit(event){
    if(email === '' || password === ''){
        return Alert.alert('Falha ao efetuar o login!', 'Preencha todos os campos!')
    }
    
    await AsyncStorage.setItem("@userEmail", email)

    const loginData={
      email: email,
      password: password
    }

    try {
      const {data: {token}} = await api.post('/signIn', loginData)
      console.log(token)
      api.defaults.headers.Authorization = `Bearer ${token}`
      await AsyncStorage.setItem('@token', token)
      await AsyncStorage.setItem("@email", email);
      navigation.navigate('CreateProfile');
    } catch (error) {
      console.log(error);
      Alert.alert('ERRO', 'Senha ou usuário incorreto!')
    }
  }

  return (
    <ImageBackground source={require('../../../assets/purplebackground.png')} style={styles.imgBackground}>
      <TouchableOpacity style={styles.backStyle}>
            <Text 
            style={styles.textBackStyle}
            onPress={() => navigation.navigate('Welcome')}
            > 
              Voltar     
            </Text> 
      </TouchableOpacity>
      <Text style={styles.buzzStyle}> Buzz </Text>

      <View style={styles.buzzBackground}> 
        <Text style={styles.textStyle}> Entre com o seu email </Text>

        <View style={styles.inputStyle}>
          <TextInput 
          placeholderTextColor={"white"} 
          placeholder='Insira seu e-mail' 
          style={styles.textInput} 
          autoCorrect={false} 
          value={email}
          onChangeText={value => setEmail(value)} 
          />
        </View>

        <View style={styles.inputStyle}>
          <TextInput placeholderTextColor={"white"} 
          placeholder='Insira sua senha' style={styles.textInput} 
          autoCorrect={false} 
          value={password}
          onChangeText={value => setPassword(value)} 
          secureTextEntry={true}
          />
        </View>
      
        <TouchableOpacity style={styles.buttonStyle} onPress={loginSubmit}>
            <Text style={styles.textInput}> 
              Entrar     
            </Text> 
        </TouchableOpacity>

        
      </View>
      
    </ImageBackground>
    
    
    
  );
}

