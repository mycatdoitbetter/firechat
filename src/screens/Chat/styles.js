import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f6f7;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({ multiline: true })`
  font-size: 17px;
  color: #333;
  width: 90%;
  max-height: 200px;
  border-radius: 10px;
  margin-left: 8px;
  padding-left: 8px;
  background-color: #ddd;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-self: auto;
  justify-content: space-between;
  background-color: #ff5f;
`;

export const SendButton = styled(TouchableOpacity)`
  background-color: blue;
`;

export const SendIcon = styled(Icon).attrs({ size: 30 })`
  color: #359081;
`;
