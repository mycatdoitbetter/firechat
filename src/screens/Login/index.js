import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

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
  IconView,
  IconImage,
} from './styles';

function Login({ navigation, route }) {
  const [name, setName] = useState('');
  // const { id } = ;
  const [id, setId] = useState(route.params.id);
  return (
    <Container>
      <Circle />

      <ContainerInput>
        <Title>Inicie uma conversa!</Title>
        <Form>
          <ViewInput>
            <Input
              placeholder="ID da sala"
              defaultValue={id}
              autoCapitalize="characters"
              onChangeText={(text) => setId(text)}
            />
          </ViewInput>
        </Form>

        <Form go>
          <ViewInput>
            <Input
              placeholder="Nome do usuário"
              onChangeText={(text) => setName(text)}
            />
          </ViewInput>
          <Button
            onPress={() =>
              navigation.navigate('Chat', { name: name, chatId: id })
            }
          >
            <IconGo name="chevron-right" size={40} />
          </Button>
        </Form>
      </ContainerInput>
    </Container>
  );
}

export default Login;
