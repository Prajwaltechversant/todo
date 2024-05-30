import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Signin Page'
import Order from '../screens/Orders'


const Stack = createNativeStackNavigator()

export default function Main() {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            {/* <Stack.Screen name='Login' component={Login} /> */}
            <Stack.Screen name='Home' component={Order} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}