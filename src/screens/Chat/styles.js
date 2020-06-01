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
  /* position: absolute; */
  font-size: 17px;
  color: #333;
  width: 90%;
  /* height: 70px; */
  max-height: 200px;
  border-radius: 10px;
  margin-left: 8px;
  padding-left: 8px;
  background-color: #ddd;

  /* flex: 1; */
  /* width: 100%; */
  /* font-size: 16px; */
  /* font-weight: bold; */
  /* height: 100px; */
  /* max-height: 100px; */
  /* margin: 20px */
`;

export const ContainerInput = styled.View`
  /* position: absolute;
  bottom: -30px; */
  /* flex: 1; */
  flex-direction: row;
  /* height: 200px; */
  align-self: auto;

  justify-content: space-between;
  background-color: #ff5f;
`;

export const SendButton = styled(TouchableOpacity)`
  background-color: blue;
  /* align-self: flex-end; */
`;

export const SendIcon = styled(Icon).attrs({ size: 30 })`
  color: #359081;
`;
