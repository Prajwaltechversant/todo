import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login({navigation, route}) {
    console.log(route)
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [userData, setUserData] = useState();
  const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false);

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async () => {
    const {username, password} = loginData;
    if (!username || !password) {
      Alert.alert('Please fill the form completely');
    } else {
      console.log('hello');
      navigation.replace('Home')
    }
  };

  const setShowPasswordfn = () => {
    setShowPassword(!showPassword);
  };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/000/585/540/original/m-logo-business-template-vector-icon.jpg',
          }}
          width={100}
          height={100}
        />
      </View>
      {/* Login Form */}

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> Username </Text>
          <TextInput
            placeholder="Enter your username"
            onChangeText={e => setLoginData({...loginData, username: e})}
            style={styles.inputBox}
            value={loginData.username}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> Password </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter your Password"
              secureTextEntry={!showPassword}
              style={styles.inputBox}
              onChangeText={e => setLoginData({...loginData, password: e})}
              value={loginData.password}
            />
            <TouchableOpacity onPress={setShowPasswordfn}>
              <AntDesign name="eye" style={styles.icon} color="green" />
            </TouchableOpacity>
          </View>
          {error && <Text style={{color: 'red'}}> {error} </Text>}
        </View>
        <View style={styles.loginBox}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={{color: 'white'}}>login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupBox}>
          <View>
            <Text style={styles.signuptext}>Create Account</Text>
          </View>
          <View style={styles.signupButton}>
            <TouchableOpacity >
              <Text style={{color: 'blue'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
