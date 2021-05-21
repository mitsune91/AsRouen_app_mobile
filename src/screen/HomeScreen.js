import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default function HomeScreen() {
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <View>
      <Text>yo</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
