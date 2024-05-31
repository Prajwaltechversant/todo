import {View, Text} from 'react-native';
import React from 'react';
import Main from './src/stack/Main';
import {AppProvider, RealmProvider, UserProvider} from '@realm/react';
import Login from './src/screens/Signin Page';
// import { Tasks } from './src/REALM/Model/Task';
import Guest from './src/screens/LoginAsGuest';
import {Videos} from './src/REALM/Model/Videos'
import { NavigationContainer } from '@react-navigation/native';

const appId = 'task-bkdjjmt'

export default function App() {
  return (
      <AppProvider id='task-bkdjjmt'>
        <UserProvider fallback={Login}>

          <RealmProvider schema={[Videos]}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects('Videos'));
              },
              rerunOnOpen:true,
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
