import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/Logo.png';

import {
  Container,
  Content,
  LogoImg,
  AreaInput,
  Input,
  SubmitButton,
  SubmitButtonText,
  Link,
  LinkText,
} from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <Container>
      <Content behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <LogoImg source={logo} />

        <AreaInput>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            textContentType="newPassword"
            returnKeyType="send"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton>
          <SubmitButtonText>Acessar</SubmitButtonText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
