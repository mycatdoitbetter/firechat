import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
  TextInput,
} from 'react-native';

import { GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat';
import Fire from '../../../Fire';

import { ContainerInput, Input, SendButton, SendIcon } from './styles';

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
    height: 40,
    text: '',
    send: null,
    appIsReady: false,
    isTyping: false,
  };

  get user() {
    return {
      _id: Fire.uid,
      name: this.props.route.params.name,
    };
  }

  clearInput() {}

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

  renderInputToolbar(props, text) {
    // console.log(props);
    return (
      <InputToolbar
        {...props}
        // primaryStyle={{ marginBottom: 20 }}
        containerStyle={{
          // justifyContent: 'center',
          // alignItems: 'center',
          marginHorizontal: 20,
          backgroundColor: '#ddd',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#ddd',
          // padding: 3,
          marginBottom: 20,
        }}
      >
        {/* <Input
          onLayout={(event) => {
            if (this.state.textInputHeight === 0) {
              this.setState({ text: event.nativeEvent.layout.height });
            }
          }}
          onContentSizeChange={(event) => {
            this.setState({ text: event.nativeEvent.contentSize.height });
          }}
          {...props}
          ref={(input) => {
            this.textInput = input;
          }}
          onChangeText={(text) => this.setState({ text: text })}
        /> */}
      </InputToolbar>
    );
  }

  renderSend(props, text) {
    return (
      <SendButton
        {...props}
        onPress={() => {
          props.onSend({
            text: text,
            user: this.user,
          });
          this.textInput.clear();
        }}
      >
        <SendIcon name="send" />
      </SendButton>
    );
  }

  render() {
    function renderSend(props) {
      return (
        <Send {...props}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              // backgroundColor: '#359081',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SendIcon name="send" />
          </View>
        </Send>
      );
    }

    return (
      <KeyboardAvoidingView
        style={{ height: '100%' }}
        keyboardVerticalOffset={100}
      >
        <GiftedChat
          messages={this.state.messages}
          placeholder="Digite uma mensagem..."
          onSend={(message) => Fire.send(message)}
          messagesContainerStyle={{
            height: '100%',
            backgroundColor: '#359081',
            paddingBottom: 50,
          }}
          user={this.user}
          scrollToBottom
          alwaysShowSend
          renderUsernameOnMessage
          renderAvatarOnTop
          renderSend={(props) => renderSend(props)}
          renderInputToolbar={(props) =>
            this.renderInputToolbar(props, this.state.text)
          }
        />
      </KeyboardAvoidingView>
    );
  }
}
