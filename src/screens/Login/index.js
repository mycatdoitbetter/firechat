import React, { useState } from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  Circle,
  ContainerInput,
  Input,
  Title,
  ViewInput,
  Form,
  Button,
  IconGo,
} from './styles';

function Login({ navigation }) {
  const [name, setName] = useState('');
  return (
    <Container>
      <Circle />
      <ContainerInput>
        <Title>Usuário</Title>
        <Form>
          <ViewInput>
            <Input
              placeholder="Nome do usuário"
              onChangeText={(text) => setName(text)}
            />
          </ViewInput>
          <Button onPress={() => navigation.navigate('Chat', { name: name })}>
            <IconGo name="chevron-right" size={40} />
          </Button>
        </Form>
      </ContainerInput>
    </Container>
  );
}

export default Login;
