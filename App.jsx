import {View, Text} from 'react-native';
import React from 'react';
import Main from './src/stack/Main';
import {AppProvider, RealmProvider, UserProvider} from '@realm/react';
import Login from './src/screens/Signin Page';
import { Tasks } from './src/REALM/Model/Task';
import Guest from './src/screens/LoginAsGuest';


const appId = 'application-0-jcccrxo'
export default function App() {
  return (
      <AppProvider id='application-0-jcccrxo'>
        <UserProvider fallback={Guest}>
          <RealmProvider schema={[Tasks]}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects('Tasks'));
              },
              rerunOnOpen:true
            },
          }}
          >
          <Main />
          </RealmProvider>
        </UserProvider>
      </AppProvider>
  );
}
