import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from 'react';

export default function PrivChat() {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

      const addContact = async () => {

      }
  })
  

  return (
    <View style={styles.container}>
      <View style={styles.myBox}>
        <TouchableOpacity>
          <Text style={styles.myText}> Adicionar contato </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.buttonPrive}>
          <Text style={styles.priveText}>Privado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPubli} onPress={() => navigation.navigate('PubliChat')}>
          <Text style={styles.publiText}>Publico</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>OLA MUNDO</Text>

      </View>
      <View>
        <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.addstyle}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}