import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  View,
  Platform,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {Text} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import theme from '../theme';
import DefaultInput from '../components/DefaultInput';
import DefaultIconButton from '../components/DefaultIconButton';
import DefaultIcon from '../components/DefaultIcon';
import {signIn} from '../redux/actions/userAction';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {userService} from '../utils/services/UserService';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [passwordValidation, setPasswordValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const validateForm = () => {
    const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const testEmail = emailValidator.test(String(email).toLowerCase().trim());
    // Verification on the email
    if (testEmail.length === 0 || !testEmail) {
      setEmailValidation('Veuillez insérer une adresse email valide');
    } else {
      setEmailValidation('');
      // Verification on the password
      if (password.length === 0) {
        setPasswordValidation('Veuillez insérer un mot de passe');
      } else {
        setPasswordValidation('');
        // Return true if both are correct
        return true;
      }
    }
  };
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (validateForm()) {
      const emailVal = email.toLowerCase().trim();
      userService
        .login(emailVal, password)
        .then(async res => {
          const token = res.authorization;
          try {
            await AsyncStorage.setItem('authToken', token);
          } catch (err) {
            console.log('errAsync', err);
          }

          const userId = res.userid;
          await AsyncStorage.setItem('userId', userId);
          axios.defaults.headers.common['authorization'] = token;

          userService
            .findUser(userId)
            .then(response => {
              dispatch(
                signIn({
                  id: response.userId,
                  email: response.email,
                  firstName: response.firstName,
                  lastName: response.lastName,
                  token: token,
                }),
              );
            })
            .catch(err => {
              console.log('findERR', err);
            });
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };
  return (
    <KeyboardAvoidingView
      style={{backgroundColor: theme.COLORS.WHITE}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          resizeMode="cover"
          style={[
            styles.container,
            {
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            },
          ]}
          source={require('../assets/Images/wave.png')}>
          <View style={styles.icon}>
            <DefaultIcon
              name="user"
              type="antdesign"
              size={40}
              color="black"></DefaultIcon>
          </View>
          <View style={styles.containerForm}>
            <Text h3 style={{marginBottom: width * 0.03}}>
              Connexion
            </Text>
            <DefaultInput
              placeholder="Adresse email"
              onChangeText={text => setEmail(text)}
              leftIcon={{type: 'material', name: 'mail-outline', color: 'gray'}}
            />
            <DefaultInput
              placeholder="Mot de passe"
              leftIcon={{
                type: 'material',
                name: 'lock',
                color: 'gray',
              }}
              onChangeText={text => setPassword(text)}></DefaultInput>
            <View style={{alignItems: 'flex-end', marginBottom: width * 0.05}}>
              <Pressable onPress={() => console.log('forgot password')}>
                <Text style={styles.forgotPassword}> Mot de passe oublié?</Text>
              </Pressable>
            </View>

            <DefaultIconButton
              icon={{
                type: 'antdesign',
                name: 'arrowright',
                size: 30,
                color: 'white',
              }}
              onPress={() => onSubmit()}
              backgroundColor={theme.COLORS.BASIC_ORANGE}></DefaultIconButton>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 36,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'gray'}}>Vous n'avez pas de compte? </Text>
              <Pressable onPress={() => navigation.navigate('RegisterUser')}>
                <Text
                  style={{
                    color: theme.COLORS.BASIC_ORANGE,
                  }}>
                  S'ENREGISTRER
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: height * 0.05,
    paddingLeft: height * 0.05,
  },
  icon: {
    marginBottom: height * 0.05,
    marginTop: height * 0.05,
  },
  containerForm: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },
  forgotPassword: {
    color: theme.COLORS.BASIC_ORANGE,
  },
});

export default Login;
