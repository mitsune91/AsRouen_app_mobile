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
import {Text, Input} from 'react-native-elements';
import {userService} from '../services/UserService';
// galio component
import theme from '../theme';
import DefaultInput from '../components/DefaultInput';
import DefaultIconButton from '../components/DefaultIconButton';
import DefaultIcon from '../components/DefaultIcon';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');

const RegisterScreen = ({navigation}) => {
  const [form, setForm] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    verficationPassword: null,
  });
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [verificationPasswordError, setVerificationPasswordError] = useState();

  const validation = () => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let passwordError = '';
    let verificationPasswordError = '';

    if (!form.firstName) {
      firstNameError = 'Champ obligatoire';
    } else {
      firstNameError = '';
    }
    if (!form.lastName) {
      lastNameError = 'Champ obligatoire';
    } else {
      lastNameError = '';
    }
    if (!form.email || !form.email.match(regexEmail)) {
      emailError = ' Email non valide. Ex : Jean@mail.com';
    } else {
      emailError = '';
    }
    if (!form.password || form.password.length < 6) {
      passwordError = 'Minimum 6 caractères';
    } else {
      passwordError = '';
    }
    if (
      !form.verficationPassword ||
      form.verficationPassword !== form.password
    ) {
      verificationPasswordError = 'Les mots de passe doivent etre identique';
    } else {
      verificationPasswordError = '';
    }
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      verificationPasswordError
    ) {
      setFirstNameError(firstNameError);
      setLastNameError(lastNameError);
      setEmailError(emailError);
      setPasswordError(passwordError);
      setVerificationPasswordError(verificationPasswordError);
      return false;
    } else {
      return true;
    }
  };
  const onSubmit = () => {
    if (validation()) {
      userService
        .register(form.firstName, form.lastName, form.email, form.password)
        .then(response => {
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log('err', error);
        });
    } else {
      validation();
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
              name="adduser"
              type="antdesign"
              size={40}
              color="black"></DefaultIcon>
          </View>
          <View style={styles.containerForm}>
            <Text h3 style={{marginBottom: width * 0.03}}>
              Inscription
            </Text>
            <View style={{flexDirection: 'row', width: '50%'}}>
              <DefaultInput
                placeholder="Prénom"
                onChangeText={text => console.log(text)}
                leftIcon={{
                  type: 'material',
                  name: 'account-circle',
                  color: 'gray',
                }}
                onChangeText={text => setForm({...form, firstName: text})}
                errorMessage={firstNameError}
              />
              <DefaultInput
                placeholder="Nom"
                leftIcon={{
                  type: 'material',
                  name: 'account-circle',
                  color: 'gray',
                }}
                errorMessage={lastNameError}
                onChangeText={text =>
                  setForm({...form, lastName: text})
                }></DefaultInput>
            </View>

            <DefaultInput
              placeholder="Adresse email"
              onChangeText={text => setForm({...form, email: text})}
              leftIcon={{type: 'material', name: 'mail-outline', color: 'gray'}}
              errorMessage={emailError}
            />

            <DefaultInput
              secureTextEntry={true}
              placeholder="Mot de passe"
              leftIcon={{
                type: 'material',
                name: 'lock',
                color: 'gray',
              }}
              onChangeText={text => setForm({...form, password: text})}
              errorMessage={passwordError}></DefaultInput>

            <DefaultInput
              secureTextEntry={true}
              placeholder="Confirmation mot de passe"
              leftIcon={{
                type: 'material',
                name: 'lock-open',
                color: 'gray',
              }}
              onChangeText={text =>
                setForm({...form, verficationPassword: text})
              }
              errorMessage={verificationPasswordError}></DefaultInput>

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
              <Text style={{color: 'gray'}}>Vous avez deja un compte? </Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: theme.COLORS.BASIC_ORANGE,
                  }}>
                  CONNEXION
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

export default RegisterScreen;
