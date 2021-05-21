import React, {createRef, useState, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from '../screen/RegisterScreen';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
const AuthStack = createStackNavigator();
export const navigationRef = createRef();
export default function AuthNavigator() {
  const [initialRouteName, setInitialRouteName] = useState('Login');
  const routeNameRef = useRef();

  return (
    <NavigationContainer ref={navigationRef} initialRouteName>
      <AuthStack.Navigator initialRouteName={initialRouteName}>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}></AuthStack.Screen>
        <AuthStack.Screen
          name="RegisterUser"
          options={{headerShown: false}}
          component={RegisterScreen}></AuthStack.Screen>
        <AuthStack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}></AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
