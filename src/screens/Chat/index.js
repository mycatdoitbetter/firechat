import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from './styles';

const Chat = ({ navigation }) => {
  return (
    <Container>
      <Text>Chat</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Chat;
