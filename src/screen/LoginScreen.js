import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';

// galio component
import {Block, Button, Input, NavBar, Text} from 'galio-framework';
import theme from '../theme';
import DefaultInput from '../components/DefaultInput';
import DefaultIconButton from '../components/DefaultIconButton';

const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  console.log('email : ', email);
  return (
    <>
      <DefaultInput
        placeholder="Coucou"
        onChangeText={text => setEmail(text)}
        leftIcon={{type: 'font-awesome', name: 'address-card', color: 'gray'}}
      />
      <DefaultInput placeholder="Bonjour" label="LABEL"></DefaultInput>
      <DefaultIconButton
        icon={{
          type: 'font-awesome',
          name: 'arrow-right',
          color: 'white',
        }}
        onPress={() => console.log('Click')}
        backgroundColor="red"></DefaultIconButton>
    </>
  );
};

const styles = StyleSheet.create({});

export default Login;
