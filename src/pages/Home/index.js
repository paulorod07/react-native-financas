import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../hooks/auth';

// import { Container } from './styles';

const Home = () => {
  const {user, signOut} = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.name}</Text>
      <Text>{user && user.email}</Text>

      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
