import React, {createRef, useState, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from '../screen/RegisterScreen';
import RegisterAddressScreen from '../screen/RegisterAddressScreen';
import LoginScreen from '../screen/LoginScreen';
const AuthStack = createStackNavigator();
export const navigationRef = createRef();
export default function AuthNavigator() {
  const [initialRouteName, setInitialRouteName] = useState('Home');
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
          name="RegisterAddressUser"
          options={{headerShown: false}}
          component={RegisterAddressScreen}></AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
