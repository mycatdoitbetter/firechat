import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Circle } from './styles';

function Login({ navigation }) {
  return (
    <Container>
      <Circle />
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text>Go to chat</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Login;
