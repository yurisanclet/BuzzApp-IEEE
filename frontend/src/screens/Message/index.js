    import React, { useState, useEffect } from 'react';
    import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    SectionList,
    Dimensions,
    } from 'react-native';
    import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
    import { messageList } from './Home/fakeapi';
    import groupBy from 'lodash/groupBy';
    import { format } from 'date-fns';
    import pt from 'date-fns/locale/pt';
    //import {messagemList} from './fakeapi
    const {width} = Dimensions.get('window');

    const Home = () => {
    const [listMsg, setListMsg] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        
    
        setListMsg([
            {
              id: 1,
              from: 1,
              to: 2,
              createdAt: '2021-04-20 20:50:00',
              message: 'olá, tudo bem com você?',
              status: 2,
            },
            {
              id: 2,
              from: 2,
              to: 1,
              createdAt: '2021-04-20 20:51:00',
              message: 'olá, tudo bem sim',
              status: 2,
            },
            {
              id: 3,
              from: 2,
              to: 1,
              createdAt: '2021-04-20 20:50:10',
              message: 'e com você, tudo bem?',
              status: 2,
            },
            {
              id: 4,
              from: 1,
              to: 2,
              createdAt: '2021-04-21 20:52:00',
              message: 'tudo bem, deixa eu te perguntar...',
              status: 2,
            },
            {
              id: 5,
              from: 1,
              to: 2,
              createdAt: '2021-04-21 20:53:30',
              message: 'Viu o ultimo jogo do vasco? Demos um show neles!',
              status: 2,
            },
            {
              id: 6,
              from: 2,
              to: 1,
              createdAt: '2021-04-21 20:55:00',
              message: 'Vi sim, foi um jogaço!!!',
              status: 2,
            },
          ]);
    }, []);

    /*function renderMsg(item) {
        if(item.from == 1){
            return(
            <View style={styles.forMe}>
                <Text style={styles.msgTxt}>{item.message}</Text>
                <Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text>
            </View>
            );
        }else{
        return(
            <View style={styles.fromMe}>
                <Text style={styles.msgTxt}>{item.message}</Text>
                <Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text>
            </View>
        )
        }
    }*/

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
            <Image /*source={{}}*/ style={styles.avatar} />
            <View>
            <Text style={styles.name}> Joao Terencio </Text>
            <Text style={styles.status}> Visto por ultimo as 16:00 </Text>
            </View>
        </View>
        <View style={styles.content}>
            <SectionList
            sections={listMsg}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => renderMsg(item)}
            renderSectionHeader={({ section: { title } }) => 
            <View style={styles.titleConteiner}>
                <Text style={styles.sectionTitle}> {title} </Text>
            </View>
            }
            />
        </View>
        <Text> {listMsg.map(msg => {return( msg.message)})}</Text>  
        <KeyboardAvoidingView behavior="padding" style={styles.footer}>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 20,
            }}>
            <TextInput style={styles.input} value={msg} onChangeText={setMsg} />
            <TouchableOpacity></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313131',
    },
    avatar: {
        height: 44,
        width: 44,
        borderRadius: 22,
        marginHorizontal: 7,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#444',
        borderBottomWidth: 1,
        paddingVertical: 7,
        paddingHorizontal: 10,
        margin: 15,
    },
    name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    status: {
        color: '#fff',
        fontSize: 13,
    },
    content: {
        backgroundColor: '#212121',
        flex: 1,
    },
    footer: {
        borderTopColor: '#444',
        borderTopWidth: 1,
    },
    input: {
        height: 40,
        borderColor: '#444',
        backgroundColor: '#414141',
        borderWidth: 1,
        borderRadius: 40,
        marginHorizontal: 20,
        marginVertical: 7,
        paddingLeft: 12,
        flex: 1,
        fontSize: 14,
    },
    titleConteiner:{
        backgroundColor: '#414141',
        alignSelf: 'center',
        marginTop: 12,
        paddingVertical: 3,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    sectionTitle:{
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
    },
    forMe:{
        backgroundColor: '#262d31',
        paddng: 10,
        marginVertical: 10,
        maxWidth: width*0.8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        marginLeft: 20,
    },
    fromMe:{
        backgroundColor: '#056162',
        paddng: 10,
        marginVertical: 10,
        maxWidth: width*0.8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        marginLeft: width*0.2 - 20,
    },
    msgTxt:{
        fontSize: 16,
        color: '#fff',
    },
    hour:{
        fontSize: 11,
        color: '#aaa',
        textAlign: 'right',
    },
    });
    export default Home;