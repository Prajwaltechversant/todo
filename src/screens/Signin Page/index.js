
import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAuth, useEmailPasswordAuth } from '@realm/react';
import styles from './style';
export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState(
    { email: '', password: '' }
  );
  const { logInWithEmailPassword, result } = useAuth();
  const handleLogin = async () => {
    console.log('hello')
    const { email, password } = loginData;
    if (!email || !password) {
      Alert.alert('Please fill the form completely');
    } else {
      try {
        await logInWithEmailPassword({email, password});
      } catch (error) {
        console.error('Login failed:', error.message);
        setError('Invalid email or password');
      }
    }
  };

  const setShowPasswordfn = () => {
    setShowPassword(!showPassword);
  };
    const {register} = useEmailPasswordAuth()

  const registerUser = async () => {
    console.log(loginData)
    const { email, password } = loginData;
    if(email && password){
      try {
        await register({email, password});
      
        await logInWithEmailPassword({email, password});
        
      } catch (error) {
        console.error('Registration failed:', error.message);
        setError('Registration failed. Please try again.');
      }
    }
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

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> email </Text>
          <TextInput
            placeholder="Enter your username"
            onChangeText={(e) => setLoginData({ ...loginData, email: e })}
            style={styles.inputBox}
            value={loginData.email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> Password </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter your Password"
              secureTextEntry={!showPassword}
              style={styles.inputBox}
              onChangeText={(e) => setLoginData({ ...loginData, password: e })}
              value={loginData.password}
            />
            <TouchableOpacity onPress={setShowPasswordfn}>
              <AntDesign name="eye" style={styles.icon} color="green" />
            </TouchableOpacity>
          </View>
          {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>

        <View style={styles.loginBox}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={{ color: 'white' }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupBox}>
          <View>
            <Text style={styles.signuptext}>Create Account</Text>
          </View>
          <View style={styles.signupButton}>
            <TouchableOpacity onPress={registerUser}>
              <Text style={{ color: 'blue' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

