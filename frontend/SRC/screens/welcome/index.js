import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation();

    return (

        <ImageBackground source={require('../../../assets/purplebackground.png')}
        style={styles.imageBackground}>
            
            <View>
                <Text style={styles.title}> Buzz </Text>
            </View>
            
            <View style={styles.buttonBackground}>
                <TouchableOpacity activeOpacity={0.5} 
                style={styles.buttonLogin} 
                onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonLoginText}>Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.5} 
                style={styles.buttonCadastro}
                onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.buttonCadastroText}>Cadastro</Text>
                </TouchableOpacity> 
            </View>

        </ImageBackground>

    )
}
