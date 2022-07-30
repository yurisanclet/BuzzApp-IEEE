import React from 'react';
import {
Text,
ImageBackground,
SafeAreaView,
TouchableOpacity,
Alert,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from  '../../../api'

/*
<TouchableOpacity 
style={styles.buttonStyle}
onPress={() => navigation.navigate('NewContact')}>
  <Text style={styles.textInput}>Adicionar nova conversa</Text>
</TouchableOpacity>


<TouchableOpacity 
style={styles.buttonStyle}
onPress={() => navigation.navigate('NewGroup')}>
<Text style={styles.textInput}>Adicionar novo grupo</Text>
</TouchableOpacity>
*/
export default function Menu() {
    const navigation = useNavigation();
    
    async function deleteAccount() {
      const deleteEmail = await  AsyncStorage.getItem('@email');  
      
      Alert.alert(
          '', 
          'Deseje excluir sua conta?', 
          [
          {text: 'Sim' , onPress: () => {
              try {
                  const response = api.delete(`/deleteUser/${deleteEmail}`)
                  console.log(response);
                  AsyncStorage.removeItem("@token")
                  navigation.navigate('SignIn')
              } catch (error) {
                  console.log(error);
              }

          }},
          {text: 'Não', onPress: navigation.navigate('Menu')}
          ])
    }


return (
    <ImageBackground style={styles.imgBackground}>
    
    <TouchableOpacity 
    style={styles.returnStyle}
    onPress={() => navigation.navigate('PrivChat')}>
        <Icon
          name="chevron-left"
          size={30}
          color="#F5ECFA"
        ></Icon>
    </TouchableOpacity>
    
    <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.textInput}>Editar perfil</Text>
        </TouchableOpacity>
      
      
        <TouchableOpacity style={styles.buttonStyle} onPress={deleteAccount}>
            <Text style={styles.textInput}>EXCLUIR MINHA CONTA</Text>
        </TouchableOpacity>

    </SafeAreaView>
    </ImageBackground>
);
}
