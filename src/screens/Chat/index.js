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
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      text: '',
      isLoadingEarlier: false,
      appIsReady: false,
      isTyping: false,
    };
  }
  // state = {
  //   messages: [],
  //   text: '',
  //   isLoadingEarlier: false,
  //   appIsReady: false,
  //   isTyping: false,
  // };

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

  renderInputToolbar(props, text) {
    console.log(text);
    return (
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          onChangeText={(text) => this.setState({ text: text })}
          {...props}
          // style={{
          //   paddingHorizontal: 20,
          //   fontSize: 16,
          //   // backgroundColor: '#000',
          //   height: 40,
          //   borderRadius: 8,
          //   marginHorizontal: 10,
          // }}
          // placeholderTextColor={'#3333'}
        />
        <TouchableOpacity
          style={{ alignContent: 'center', alignItems: 'center' }}
          {...props}
          onPress={() =>
            props.onSend({
              text: text,
              user: this.user,
            })
          }
        >
          <Icon name="send" size={30} style={{ margin: 5, color: 'blue' }} />
        </TouchableOpacity>
      </View>
    );
  }

  renderSend(props, text) {
    // console.log(this.state.text.bind(this)  );
    return (
      <TouchableOpacity
        style={{ alignContent: 'center', alignItems: 'center' }}
        {...props}
        onPress={() =>
          props.onSend({
            text: text,
            user: this.user,
          })
        }
      >
        <Icon name="send" size={30} style={{ margin: 5, color: 'blue' }} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          placeholder="Digite uma mensagem..."
          onSend={(message) => Fire.send(message)}
          user={this.user}
          scrollToBottom
          renderUsernameOnMessage
          renderAvatarOnTop
          // onInputTextChanged={(text) => this.setState({ text: text })}
          renderInputToolbar={(props) =>
            this.renderInputToolbar(props, this.state.text)
          }
          // renderSend={(props) => this.renderSend(props, this.state.text)}
        />
      </SafeAreaView>
    );
  }
}
