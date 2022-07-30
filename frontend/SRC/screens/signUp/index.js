import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, AsyncStorageStatic, Alert} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import api from '../../../api';

export default function SignUp() {

const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  
   async function handleSubmit(){
        if(email == '' || password == '' || confirmPassword == ''){
            return Alert.alert('Falha ao registrar usuário', 'Preencha todos os campos!')
        }

        if (password !== confirmPassword){
            return Alert.alert('ERRO', 'Senhas não coincidem');
        }

        const data = {
          emailUser: email,
          passwordUser: password,
          biographyUser: '',
          nameUser: ''
        }
        
      if(data.biographyUser == '' && data.nameUser == ''){  
        
        try {
          const response = await api.post('/signUp', data)
          console.log(response.data);
          Alert.alert("Sucesso", "Usuário criado com sucesso!")
          navigation.navigate('SignIn');
        } catch (error) {
          Alert.alert("ERRO", "Usuário já cadastrado!")
          console.log(error);
        }
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
        <Text style={styles.textStyle}>Realize seu cadastro</Text>
        <View style={styles.inputStyle}>
          <TextInput 
          keyboardType="email-address"
          autoCorrect={false}
          placeholderTextColor={"white"} 
          placeholder='E-mail'
          style={styles.textInput}
          value={email}
          onChangeText={value => setEmail(value)}
          />
  
        </View>
        <View style={styles.inputStyle}>
          <TextInput
          autoCorrect={false} 
          placeholderTextColor={"white"} 
          placeholder='Senha' 
          style={styles.textInput} 
          secureTextEntry={true} 
          value={password}
          onChangeText={value => setPassword(value)} 
          /> 
        </View>
        <View style={styles.inputStyle}>
          <TextInput 
          autoCorrect={false}
          placeholderTextColor={"white"} 
          placeholder='Confirme sua senha' 
          style={styles.textInput} secureTextEntry={true} 
          onChangeText={value => setConfirmPassword(value)}
          value={confirmPassword}
          />
        </View>
        <TouchableOpacity style={styles.buttonStyle}   onPress={handleSubmit} /*onPress={() => navigation.navigate('CreateProfile')}*/>
              <Text style={styles.textInput} >Registrar</Text>
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
    
  );
}

// backStyle, textBackStyle, buzzStyle