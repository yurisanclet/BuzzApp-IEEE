import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
 /* const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   function handleChangeEmail(event){
    setEmail(event.target.email);
  }

  function handleChangePassword(event){
    setPassword(event.target.Text);
  }

  async function submit(event){
    const login={
      email,password
    }
    const res = await axios({
      method: "POST",
     url: "/login",
      headers: {
          "content-Type": "aplication/json",
      },
      data: JSON.stringify(login)
    });
    if(res.status == 200){
      const {token}=res.data;
      await AsyncStorage.setItem("token",token);

    }else{
      Alert.alert('senha ou usuário incorreto')
    }
  }*/

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
          onChange={handleChangeEmail} 
          value={email}
          />
        </View>

        <View style={styles.inputStyle}>
          <TextInput placeholderTextColor={"white"} 
          placeholder='Insira sua senha' style={styles.textInput} 
          autoCorrect={false} 
          onChange={handleChangePassword} 
          value={password}
          secureTextEntry={true}
          />
        </View>
      
        <TouchableOpacity style={styles.buttonStyle} /*onPress={submit}*/ onPress={() => navigation.navigate('PrivChat')}>
            <Text style={styles.textInput}> 
              Entrar     
            </Text> 
      </TouchableOpacity>

        
      </View>
      
    </ImageBackground>
    
    
    
  );
}

