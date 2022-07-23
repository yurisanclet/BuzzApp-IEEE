//import React, { useState, useEffect } from 'react';
import {
Text,
ImageBackground,
SafeAreaView,
TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navigation = useNavigation();
return (
    <ImageBackground style={styles.imgBackground}>
    <TouchableOpacity 
    style={styles.backStyle}
    onPress={() => navigation.navigate('PrivChat')}
    >
        <Text style={styles.textBackStyle}>voltar</Text>
    </TouchableOpacity>
    <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textInput}>Adicionar nova conversa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textInput}>Adicionar novo grupo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textInput}>EXCLUIR MINHA CONTA</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </ImageBackground>
);
}
