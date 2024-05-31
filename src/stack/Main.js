import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import Login from '../screens/Signin Page';
// import Order from '../screens/Orders';
import Videos from '../videos';
import SavedVideos from '../screens/SavedVideos';
import VideoPlayer from '../screens/player/Video';

const Stack = createNativeStackNavigator();

export default function Main() {
  const navigation = useNavigation()
  return (
      <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={Login} /> */}
        <Stack.Screen name="Home" component={Videos} options={{
          headerRight:()=>(
            <TouchableOpacity
            onPress={()=>navigation.navigate('saved',{type:'saved'})}
            style={{backgroundColor:'green', width:100, height:30, justifyContent:'center', alignItems:'center', borderRadius:5}}>
              <Text style={{color:'white'}}>Saved Videos</Text>
            </TouchableOpacity>
          )
        }} />
        <Stack.Screen name='saved' component={SavedVideos} />
        <Stack.Screen name='player' component={VideoPlayer} />
      </Stack.Navigator>
  );
}
