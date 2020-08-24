import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import AuthProvider from './hooks/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#131313" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
