import * as React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleChangeEmail(event){
    setEmail(event.target.value);
  }

  function handleChangePassword(event){
    setPassword(event.target.value);
  }

  function handleChangeConfirmPassword(event){
    setConfirmPassword(event.target.value);
  }

  async function submit(event){
    const login={
      email,password, confirmPassword
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
          onChange={handleChangeEmail} 
          value={email}
          >
          
          </TextInput>
        </View>
        <View style={styles.inputStyle}>
          <TextInput
          autoCorrect={false} 
          placeholderTextColor={"white"} 
          placeholder='Senha' 
          style={styles.textInput} 
          secureTextEntry={true} 
          onChange={handleChangePassword} 
          value={password}
          /> 
        </View>
        <View style={styles.inputStyle}>
          <TextInput 
          autoCorrect={false}
          placeholderTextColor={"white"} 
          placeholder='Confirme sua senha' 
          style={styles.textInput} secureTextEntry={true} 
          onChange={handleChangeConfirmPassword}
          value={password}
          />
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={submit}>
            <Text style={styles.textInput}> 
              Entrar     
            </Text> 
      </TouchableOpacity>
      </View>
      
    </ImageBackground>
    
  );
}

// backStyle, textBackStyle, buzzStyle