import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #131313;
  align-items: center;
`;

export const Name = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #fff;
`;

export const NewLink = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #00b94a;
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const NewLinkText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Logout = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #c62c36;
  width: 90%;
  height: 45px;
  border-radius: 10px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
