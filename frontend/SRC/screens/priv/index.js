import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function priveChat() {
  return (
    <View style={styles.container}>
      <View style={styles.myBox}>
        <Text style={styles.myText}> Meus chats </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.buttonPrive}>
          <Text style={styles.priveText}>Privado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPubli}>
          <Text style={styles.publiText}>Publico</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addstyle}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}