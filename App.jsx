import { View, Text } from 'react-native';
import React from 'react';
import Main from './src/stack/Main';
import { AppProvider, RealmProvider, UserProvider, useUser } from '@realm/react';
import { Videos } from './src/REALM/Model/Videos';
import { NavigationContainer } from '@react-navigation/native';
import { Devices } from './src/REALM/Model/Devices';
import Login from './src/screens/Signin Page';
// import { initializeApp } from '@react-native-firebase/app';

const appId = 'task-bkdjjmt';
// initializeApp()


export default function App() {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={<Login />}  >
        <RealmProvider schema={[Videos, Devices]}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects('Videos'));
              },
              rerunOnOpen: true,
            },
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects('Devices'));
              },
              rerunOnOpen: true,
            },
          }}

          >
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
