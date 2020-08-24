import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../hooks/auth';

// import { Container } from './styles';

const Home = () => {
  const {user, signOut} = useContext(AuthContext);
  // console.log(user);

  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.name}</Text>
      <Text>{user && user.email}</Text>

      <Button
        title="Sair"
        onPress={() => {
          // signOut();
          console.log(user);
        }}
      />
    </View>
  );
};

export default Home;
