import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'; // n usado ainda

import * as ImagePicker from 'expo-image-picker';
//import axios from 'axios'; // n usado ainda

const onReach_MAX_Length1 = (temp) => {
  var tempLength = temp.length.toString();

  if (tempLength == 120) {
    Alert.alert('Limite de 120 caracteres atingido');
  } // limite de caracteres da bio
};
const onReach_MAX_Length2 = (temp) => {
  var tempLength = temp.length.toString();

  if (tempLength == 50) {
    Alert.alert('Limite de 50 caracteres atingido');
  } // limite de caracteres do nome de usuario
};


export default function CreateProfile() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []); // perguntando se podemos ter acesso as fotos
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (hasGalleryPermission === false) {
    return <Text>Sem acesso</Text>;
  }
  
  return (
    <ImageBackground source={require('../../../assets/purplebackground.png')} style={styles.imgBackground}>
      <View style={styles.buzzBackgorund}>
        <Text style={styles.textStyles}>Perfil</Text>
        <View>
        {image && <Image source={{uri: image}}/>}
            <TouchableOpacity
                onPress={() => pickImage()}>
                <Avatar.Image
                source={{uri: image}}
                size={130}
                marginBottom={45}
                style={styles.addImageButton}
                />
            </TouchableOpacity>
        </View>
        <View>
          <View style={styles.inputStyle}>
            <TextInput
            autoCorrect={false} 
            placeholderTextColor={"white"} 
            placeholder='Nome'
            onChangeText={(item) => onReach_MAX_Length2(item)} // (text)=> setName(text)
            defaultValue={name}
            style={styles.textInput}>
            </TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput 
            placeholderTextColor={"white"} 
            placeholder='Biografia'
            onChangeText={(item) => onReach_MAX_Length1(item)} // (text)=> setBio(text)
            defaultValue={bio}
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