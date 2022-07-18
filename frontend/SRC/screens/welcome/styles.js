import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageBackground: {
        width:'100%',
        height:'100%',
        flex: 1,
        alignItems: 'center', //alinhamento dos elementos no eixo y (vertical)
        justifyContent: 'center', //alinhamento dos elementos no eixo x (horizontal)
    },


    title: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    buttonBackground:{
        backgroundColor: "#212124",
        borderRadius: 15,
        height: 120,
        width: 250,
        justifyContent: "space-around",
        alignItems: "center",
    },

    buttonLogin:{
        backgroundColor: "#991AD4",
        width: 90,
        height: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonLoginText:{
        color: '#ffffff',
        fontSize: 18,
    },

    buttonCadastro:{
        backgroundColor: "#991AD4",
        width: 90,
        height: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonCadastroText: {
        color: '#ffffff',
        fontSize: 18,
    },

})