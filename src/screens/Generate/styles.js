import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

// ffcd01 <- firebase yellow light
// ffa900 <- firebase yellow dark
// ff8500 <- firebase yellow darkest

export const Container = styled.View`
  flex: 1;
  background-color: #359081;
  padding: 30px;
  justify-content: center;
`;

export const Circle = styled.View`
  width: 500px;
  height: 500px;
  border-radius: 250px;
  background-color: #46a794;
  position: absolute;
  left: -120px;
  top: -10px;
`;

export const ContainerInput = styled.View`
  /* align-self: flex-start; */
  /* flex: 1; */
  margin-top: 50px;
  /* background-color: #333; */
  justify-content: center;
  /* align-items: center; */
`;

export const Title = styled.Text`
  font-size: 27px;
  font-weight: 700;
  color: #ffcd01;

  text-align: center;
`;

export const ViewInput = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  border: 0.5px;
  border-color: #bbb;
  width: 85%;
  height: 45px;
  border-radius: 8px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(244, 246, 247, 0.6);',
})`
  flex: 1;
  font-size: 18px;
  font-weight: 700;
  color: #f4f6f7;
  padding-left: 10px;
`;

export const Form = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #ffcd01;
  margin-left: 5px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const IconGo = styled(Icon)`
  color: #fff;
`;

export const IconView = styled.View`
  width: ${({ screenWidth }) => screenWidth}px;
  margin-top: -90px;

  position: absolute;
  top: 150px;
`;
export const IconImage = styled.Image``;

export const GenerateButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f6f7f8;
`;

export const GenerateButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 40px;
  border-radius: 8px;
  margin: 10px;
  background-color: #ffcd01;
  align-self: center;
`;

export const EnterButton = styled(TouchableOpacity)``;
export const EnterButtonText = styled.Text`
  color: #ffcd01;
  align-self: center;
  font-size: 17px;
  font-weight: bold;
`;
