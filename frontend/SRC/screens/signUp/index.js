import * as React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {

  const navigation = useNavigation();

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
          style={styles.textInput}>
          </TextInput>
        </View>
        <View style={styles.inputStyle}>
          <TextInput
          autoCorrect={false} 
          placeholderTextColor={"white"} 
          placeholder='Senha' 
          style={styles.textInput} secureTextEntry={true} 
          /> 
        </View>
        <View style={styles.inputStyle}>
          <TextInput 
          autoCorrect={false}
          placeholderTextColor={"white"} 
          placeholder='Confirme sua senha' 
          style={styles.textInput} secureTextEntry={true} 
          />
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textInput}> 
              Entrar     
            </Text> 
      </TouchableOpacity>
      </View>
      
    </ImageBackground>
    
  );
}

// backStyle, textBackStyle, buzzStyle