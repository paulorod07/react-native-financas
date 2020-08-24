import React, {useState, createContext, useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadUserFromStorage();
  }, []);

  const signIn = useCallback(
    async (email, password) => {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (value) => {
          let uid = value.user.uid;
          await firebase
            .database()
            .ref('users')
            .child(uid)
            .once('value')
            .then((snapshot) => {
              let data = {
                uid,
                name: snapshot.val().nome,
                email: value.user.email,
              };

              setUser(data);
              storageUser(data);
            });
        })
        .catch((error) => {
          alert(error.code);
        });
    },
    [storageUser],
  );

  const signUp = useCallback(
    async (name, email, password) => {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
          let uid = value.user.uid;
          await firebase
            .database()
            .ref('users')
            .child(uid)
            .set({
              balance: 0,
              name: name,
            })
            .then(() => {
              let data = {
                uid,
                name: name,
                email: value.user.email,
              };

              setUser(data);
              storageUser(data);
            })
            .catch((error) => {
              alert(error.code);
            });
        });
    },
    [storageUser],
  );

  const storageUser = useCallback(async (data) => {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }, []);

  const signOut = useCallback(async () => {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => setUser(null));
  }, []);

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, signUp, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
