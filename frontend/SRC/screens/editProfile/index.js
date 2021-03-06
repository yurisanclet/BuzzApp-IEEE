import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import api from '../../../api';
import { useNavigation } from '@react-navigation/native';
// import axios from 'axios'; // n usado ainda

/*
const onReach_MAX_Length1 = (temp) => {
  var tempLength = temp.length.toString();

  if (tempLength == 120) {
    Alert.alert('Limite de 120 caracteres atingido');
  }
};
const onReach_MAX_Length2 = (temp) => {
  var tempLength = temp.length.toString();

  if (tempLength == 50) {
    Alert.alert('Limite de 50 caracteres atingido');
  }
};
*/

export default function EditProfile() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const navigation = useNavigation();
  
  const dataUser = {
     userName: AsyncStorage.getItem('@userName'),
     userBio: AsyncStorage.getItem('@userBio')
  }

  async function editSubmit(){
    const data = {
      nameUser: name,
      biographyUser: bio
    
    }

    console.log(data)
    const emailResponse = await AsyncStorage.getItem('@email')
    

    console.log(emailResponse)
    
    try {
        const response = await api.put(`/update/${emailResponse}`, data);
        console.log(response.data);
        Alert.alert('Salvou!')
        navigation.navigate("PrivChat");
    } catch (error) {
        console.log(error);
        Alert.alert("ERRO");
    }
  }


  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []); // perguntando se podemos ter acesso ??s fotos
  


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
      style={styles.imgBackground}>
      <TouchableOpacity style={styles.backStyle}>
          <Text style={styles.textBackStyle}>voltar</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.buzzBackgorund}>
        <Text style={styles.textStyles}>Editar Perfil</Text>
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
              placeholderTextColor={'white'}
              placeholder="Nome de usu??rio"
              maxLength={50}
              //onChangeText={(item) => onReach_MAX_Length2(item)}
              onChangeText={value => setName(value)}
              value={name}
              style={styles.textInput}>
            </TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholderTextColor={'white'}
              placeholder="Biografia"
              maxLength={120}
              //onChangeText={(item) => onReach_MAX_Length1(item)}
              onChangeText={value => setBio(value)}
              value={bio}
              style={styles.textInput}></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={editSubmit} style={styles.buttonStyle}>
            <Text style={styles.textInput}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
      style={styles.imgBackground}>
      <TouchableOpacity style={styles.backStyle}>
          <Text style={styles.textBackStyle}>voltar</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.buzzBackgorund}>
        <Text style={styles.textStyles}>Editar Perfil</Text>
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
              placeholderTextColor={'white'}
              placeholder="Nome de usu??rio"
              maxLength={50}
              onChangeText={(item) => onReach_MAX_Length2(item)}
              defaultValue={name}
              style={styles.textInput}>
              
            </TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholderTextColor={'white'}
              placeholder="Biografia"
              maxLength={120}
              onChangeText={(item) => onReach_MAX_Length1(item)}
              defaultValue={bio}
              style={styles.textInput}>
              
              </TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textInput}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
    )
  }
  
}
