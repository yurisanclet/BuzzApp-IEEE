import React,{ useState }from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles} from './styleLogin';
import { Button } from '../../components/Button';


 export function Login(props) {
  
   const [userEmail, setEmail] = useState('')
   const [password, setPassword] = useState('')
   
  
  
  // função executada quando o formulário for enviado
   function handleLogin(){
      const data = {
          userEmail,
          password,
        }
      console.log(data);
  }

  // navegaçao para a tela de cadastro
  const navigation = useNavigation();
  function pressToGoRegister() {
      navigation.navigate('Register');   
  }
  
  
  return (

  <View style={styles.backgroundContainer}>
    <Text style={styles.title}> Buzz </Text>  
    <View style={styles.container}>
      <Text style={styles.textHeader}>Entre com o e-mail</Text>
      

      <TextInput 
        placeholderTextColor={"white"}
        placeholder='Insira seu endereço de e-mail'
        onChangeText={setEmail}
        value={userEmail}
        style={styles.textInput}  
      />

      
      <TextInput 
        placeholderTextColor={"white"}
        placeholder='Insira sua senha'
        onChangeText={setPassword}
        value={password}
        style={styles.textInput}
        secureTextEntry={true}  
      />
      

      <View style={{width:'80%', flexDirection: 'row', justifyContent: 'space-between'}}>
          
          <TouchableOpacity>
              <Text style={styles.textLinks}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={pressToGoRegister}>
            <Text style={styles.textLinks}>Cadastre-se</Text>
          </TouchableOpacity>

      </View>
          <Button name="Entrar" onPress={handleLogin}/>
      <View>
        

      </View>
    </View>
  </View>  
  );
}

