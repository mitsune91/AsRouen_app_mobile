import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {signOut} from '../redux/actions/userAction';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const defaultSignOut = async () => {
    console.log('pas bien ');
    // Remove Axios default header
    delete axios.defaults.headers.common['Authorization'];
    // Set AsyncStorage
    try {
      await AsyncStorage.removeItem('authToken');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text>{user.email}</Text>
      <Text>{user.firstName}</Text>
      <Button
        onPress={async () => {
          await defaultSignOut();
          dispatch(signOut());
        }}
        title="deco"></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
