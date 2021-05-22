import React, {createRef, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
const HomeStack = createStackNavigator();
export const navigationRef = createRef();
export default function HomeNavigator() {
  const [initialRouteName, setInitialRouteName] = useState('Home');

  return (
    <NavigationContainer ref={navigationRef} initialRouteName>
      <HomeStack.Navigator initialRouteName={initialRouteName}>
        <HomeStack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
