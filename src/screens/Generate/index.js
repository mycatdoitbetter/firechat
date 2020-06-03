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
  GenerateButton,
  GenerateButtonText,
  EnterButtonText,
  EnterButton,
} from './styles';

function Login({ navigation }) {
  const [id, setId] = useState('');
  const [alreadyMaked, setAlreadyMaked] = useState(false);

  function makeid(length) {
    var result = '';
    var characters = '@ABCD123';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setAlreadyMaked(true);
    setId(result);
    return true;
  }

  return (
    <Container>
      <Circle />

      <IconView screenWidth={Math.round(Dimensions.get('window').width)}>
        <Image
          resizeMode="cover"
          style={{ width: 120, height: 120, alignSelf: 'center' }}
          source={require('../../../assets/firechat_noback.png')}
        />
      </IconView>
      <ContainerInput>
        <Title>Crie um nova conversa!</Title>
        <Form>
          <ViewInput>
            <Input
              editable={false}
              selectTextOnFocus={false}
              placeholder="Gerar id"
              value={id}
            />
          </ViewInput>
        </Form>
        <GenerateButton
          onPress={() => {
            alreadyMaked ? navigation.navigate('Login', { id }) : makeid(4);
          }}
        >
          <GenerateButtonText>
            {alreadyMaked ? 'Começar!' : 'Gerar'}
          </GenerateButtonText>
        </GenerateButton>
        <EnterButton onPress={() => navigation.navigate('Login', { id })}>
          <EnterButtonText>Já tenho um código</EnterButtonText>
        </EnterButton>
      </ContainerInput>
    </Container>
  );
}

export default Login;
