import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #131313;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.Image`
  margin-bottom: 15px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.20)',
})`
  background: rgba(0, 0, 0, 0.2);
  width: 90%;
  font-size: 16px;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #00b94a;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  color: #131313;
`;
