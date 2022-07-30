import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreenBianca = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Como vc ta?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bianca Gallicchio',
          avatar: '',
        },
      },
      {
        _id: 2,
        text: 'Oieee, ta td bem!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'user',
          avatar: '',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons // parte de enviar mensagem
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#991ad4"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#991ad4',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#991ad4' />
    );
  }
  return (
    <GiftedChat 
      messages={messages}
      onSend={(messages) => onSend(messages)}
      
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      renderInputToolbar={this.renderInputToolbar} 
    />
  );
};

export default ChatScreenBianca;
