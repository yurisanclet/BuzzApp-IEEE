import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
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
    return (
      <ImageBackground
        source={require('../../../assets/purplebackground.png')}
        style={styles.imgBackground}>
        <SafeAreaView style={styles.buzzBackgorund}>
          <Text style={styles.textStyles}>Perfil</Text>
          <View>
            <Avatar.Image
              source={require('../../../assets/default-avatar.jpg')}
              size={130}
              marginBottom={45}
            />
          </View>
          <View>
            <View style={styles.inputStyle}>
              <TextInput
                autoCorrect={false}
                placeholderTextColor={'white'}
                placeholder="Nome de usuário"
                maxLength={50}
                onChangeText={
                  ((item) => onReach_MAX_Length2(item), (text) => setName(text))
                }
                defaultValue={name}
                style={styles.textInput}></TextInput>
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholderTextColor={'white'}
                placeholder="Biografia"
                maxLength={120}
                onChangeText={
                  ((item) => onReach_MAX_Length1(item), (text) => setBio(text))
                }
                defaultValue={bio}
                style={styles.textInput}></TextInput>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.textInput}>Criar Perfil</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
  else{
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
            //onChange={(text)=> setName(text)}
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
          <TouchableOpacity style={styles.buttonStyle}  onPress={() => navigation.navigate('PrivChat')}>
            <Text style={styles.textInput}
        
            >
              Criar Perfil
            </Text>
          </TouchableOpacity> 
        </View>
      </View> 
    </ImageBackground>
    
  );
  }
  
}
