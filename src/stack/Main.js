import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import Login from '../screens/Signin Page';
// import Order from '../screens/Orders';
import Videos from '../videos';
import SavedVideos from '../screens/SavedVideos';
import VideoPlayer from '../screens/player/Video';
import { useAuth, useQuery, useRealm } from '@realm/react';
import DeviceInfo from 'react-native-device-info';



const Stack = createNativeStackNavigator();

export default function Main() {
  const navigation = useNavigation()

  const { logOut, currentUser } = useAuth();
  const realm = useRealm();
  const deviceId = DeviceInfo.getUniqueId()._j;

  // const [isPrimaryDeviceChecked, setIsPrimaryDeviceChecked] = useState(false);


  // useEffect(() => {
  //   checkPrimaryDevice();
  // }, [currentUser]); 

  // const checkPrimaryDevice = async () => {
   
  //   if (currentUser && !isPrimaryDeviceChecked) {
  //     try {
  //       const devices = realm.objects('Devices').filtered(`device_id = "${deviceId}"`);
  //       if (devices.length === 0) {
  //         realm.write(() => {
  //           realm.create('Devices', { device_id: deviceId, user_id: currentUser.id, is_primary: true });
  //         });
  //         setIsPrimaryDeviceChecked(true);
  //       } else {
  //         const primaryDevice = devices.find(device => device.is_primary === true);
  //         setIsPrimaryDeviceChecked(primaryDevice && primaryDevice.user_id === currentUser.id);
  //       }
  //     } catch (error) {
  //       console.error('Error checking primary device:', error);
  //     }
  //   }
  // };

  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Login' component={Login} /> */}
      <Stack.Screen name="Home" component={Videos} options={{
        headerRight: () => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('saved', { type: 'saved' })}
              style={{ backgroundColor: 'green', width: 100, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>Saved Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={logOut}
            >
              <Text style={{ color: 'red' }}>Logout</Text>
            </TouchableOpacity>
          </>
        )
      }} />
      <Stack.Screen name='saved' component={SavedVideos} />
      <Stack.Screen name='player' component={VideoPlayer} />
    </Stack.Navigator>
  );
}
