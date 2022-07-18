import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function CreateProfile() {
  return (
    <ImageBackground source={require('../../../assets/purplebackground.png')} style={styles.imgBackground}>
      <View style={styles.buzzBackgorund}>
        <Text style={styles.textStyles}>Perfil</Text>
        <View>
            <TouchableOpacity
                style={styles.addImageButton}>
                <Avatar.Image
                source={require('../../../assets/default-avatar.jpg')}
                size={130}
                marginBottom={45}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.inputStyle}>
            <TextInput
            autoCorrect={false} 
            placeholderTextColor={"white"} 
            placeholder='Nome'
            style={styles.textInput}>
            </TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput 
            placeholderTextColor={"white"} 
            placeholder='Biografia'
            style={styles.textInput}>
            </TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textInput}>
              Criar Perfil
            </Text>
          </TouchableOpacity> 
        </View>
      </View>
      
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  /*
  buzzStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  */
  buzzBackgorund: {
    width: 349,
    height: 657,
    backgroundColor: "#212124",
    alignItems: 'center',
    borderRadius: 61,
  },
  
  inputStyle: { // antiga caixa menor
    width: 319,
    height: 54,
    marginBottom: 31,
    backgroundColor: "#565459",
    borderRadius: 15,
  },
  
  textStyles: {
    fontSize: 20,
    marginVertical: 15,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 34,
    marginBottom: 25,
  },


  textInput: {
    fontSize: 14,
    marginVertical: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
  },

  buttonStyle:{
      width: 319,
      height: 54,
      marginTop: 100,
      backgroundColor: "#991AD4",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
