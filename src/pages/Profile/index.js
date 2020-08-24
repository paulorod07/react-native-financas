import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../hooks/auth';

import {
  Container,
  Name,
  NewLink,
  NewLinkText,
  Logout,
  LogoutText,
} from './styles';

const Profile = () => {
  const {user, signOut} = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Container>
      <Name>{user && user.name}</Name>

      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewLinkText>Registrar gastos</NewLinkText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
};

export default Profile;
