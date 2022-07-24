import React from 'react';
import {
Text,
ImageBackground,
SafeAreaView,
TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menu() {
    const navigation = useNavigation();
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
        <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textInput}>EXCLUIR MINHA CONTA</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </ImageBackground>
);
}
