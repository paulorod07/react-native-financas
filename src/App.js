import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import firebase from './services/firebaseConnection';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#131313" />
      <Routes />
    </NavigationContainer>
  );
}