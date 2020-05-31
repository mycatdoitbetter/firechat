import React, { useState } from 'react';
import { AppLoading, Asset, Linking } from 'expo';
import {
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../../../Fire';

import { Container } from './styles';

// function Chat({ navigation, route }) {
//   const [messages, setMessages] = useState([]);
//   const { name } = route.params;

//   function getUser() {
//     return {
//       _id: Fire.uid,
//       name,
//     };
//   }

//   function componentDidMount() {
//     Fire.get((message) =>
//       setMessages((previous) => GiftedChat.append(previous, message))
//     );
//   }

//   function componentWillUnmount() {
//     Fire.off();
//   }

//   const chat = (
//     <GiftedChat
//       messages={messages}
//       onSend={(messages) => Fire.send(messages)}
//       user={() => getUser()}
//     />
//   );

//   if (Platform.OS === 'android') {
//     return (
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior="padding"
//         keyboardVerticalOffset={30}
//         enabled
//       >
//         {chat}
//       </KeyboardAvoidingView>
//     );
//   }

//   return (
//     <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
//     // <Container>
//     //   <Text>Chat</Text>
//     //   <TouchableOpacity onPress={() => navigation.goBack()}>
//     //     <Text>{`${name}, Back`}</Text>
//     //   </TouchableOpacity>
//     // </Container>
//   );
// }

// export default Chat;

export default class Chat extends React.Component {
  state = {
    messages: [],
    typingText: null,
    isLoadingEarlier: false,
    appIsReady: false,
    isTyping: false,
  };

  get user() {
    return {
      _id: Fire.uid,
      name: this.props.route.params.name,
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    Fire.off();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          placeholder="Digite uma mensagem..."
          onSend={Fire.send}
          user={this.user}
          // messagesContainerStyle={{ backgroundColor: '#359081' }}
          scrollToBottom
          renderUsernameOnMessage
          renderAvatarOnTop
        />
      </SafeAreaView>
    );
  }
}
