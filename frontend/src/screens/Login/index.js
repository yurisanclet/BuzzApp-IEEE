import React from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles} from './styleLogin';
import { Button } from '../../components/Button';


 export function Login(props) {
  const navigation = useNavigation();
  
  function pressToGoRegister() {
      navigation.navigate('Register');   
  }
  
  
  return (

  <View style={styles.backgroundContainer}>
    <Text style={styles.title}> Buzz </Text>  
    <View style={styles.container}>
      <Text style={styles.textHeader}>Entre com o e-mail</Text>
      <TextInput placeholderTextColor={"white"} placeholder='Insira seu endereço de e-mail' style={styles.textInput}/>
      <TextInput placeholderTextColor={"white"} placeholder='Insira sua senha' style={styles.textInput}/>
      <View style={{width:'80%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
              <Text style={styles.textLinks}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={pressToGoRegister}>
            <Text style={styles.textLinks}>Cadastre-se</Text>
          </TouchableOpacity>
      </View>
      <Button/>
    </View>
  </View>  
  );
}

