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

export default function message(){
    const [listMsg, setListMsg] = useState();
    const [msg, setMsg] = useState('');

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
            <View>
            <Text style={styles.name}> Joao Terencio </Text>
            <Text style={styles.status}> Visto por ultimo as 16:00 </Text>
            </View>
        </View>
        <View style={styles.content}>
            <View style={styles.titleConteiner}>
            </View>
        </View>
        <KeyboardAvoidingView  style={styles.footer}>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 20,
            }}>
            <TextInput style={styles.input}/>
            <TouchableOpacity>
            <Icons name='chevron-right' size={20} color='#fff'></Icons>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}