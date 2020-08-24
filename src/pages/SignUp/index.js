import React, {useState, useContext, useCallback} from 'react';
import {Platform} from 'react-native';

import logo from '../../assets/Logo.png';
import {AuthContext} from '../../hooks/auth';

import {
  Container,
  Content,
  LogoImg,
  AreaInput,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const {signUp} = useContext(AuthContext);

  const handleSignUp = useCallback(() => {
    signUp(name, email, password);
  }, [name, email, password, signUp]);

  return (
    <Container>
      <Content behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <LogoImg source={logo} />

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </AreaInput>

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
            textContentType="newPassword"
            returnKeyType="send"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitButtonText>Cadastrar</SubmitButtonText>
        </SubmitButton>
      </Content>
    </Container>
  );
};

export default SignUp;
