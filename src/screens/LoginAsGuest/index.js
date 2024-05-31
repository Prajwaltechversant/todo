import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import coloPalette from '../../assets/Theme/coloPalette'
import { useAuth } from '@realm/react'


export default function Guest() {
    const {logInWithAnonymous} = useAuth();
    const guestLogin =()=>{
        logInWithAnonymous()
    }
  return (
    <View style={{flex:1, justifyContent:'center',backgroundColor:coloPalette.light.secondary, alignItems:'center'}}>

      <TouchableOpacity onPress={guestLogin}>
        <Text style={{color:'black', fontSize:20, fontWeight:'700'}}>Login As Guest</Text>
      </TouchableOpacity>
    </View>
  )
}