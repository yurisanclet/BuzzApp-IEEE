import * as React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
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
        <Text style={styles.textStyle}> Entre com o seu email </Text>

        <View style={styles.inputStyle}>
          <TextInput 
          placeholderTextColor={"white"} 
          placeholder='Insira seu e-mail' 
          style={styles.textInput} 
          autoCorrect={false} 
          onChangeText={()=>{}}
          />
        </View>

        <View style={styles.inputStyle}>
          <TextInput placeholderTextColor={"white"} 
          placeholder='Insira sua senha' style={styles.textInput} 
          autoCorrect={false} 
          onChangeText={()=>{}}
          secureTextEntry={true}
          />
        </View>
      
        <TouchableOpacity style={styles.buttonStyle}>
            <Text 
            style={styles.textInput}
            onPress={() => navigation.navigate('CreateProfile')}
            > 
              Entrar     
            </Text> 
      </TouchableOpacity>

        
      </View>
      
    </ImageBackground>
    
    
    
  );
}

