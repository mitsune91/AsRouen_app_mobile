import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
// galio component
import {Block, Button, Input, NavBar, Text} from 'galio-framework';
import theme from '../theme';
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

  const goToAddress = () => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let passwordError = '';
    let verificationPasswordError = '';

    if (!form.firstName) {
      firstNameError = 'Champ obligatoire';
    }
    if (!form.lastName) {
      lastNameError = 'Champ obligatoire';
    }
    if (!form.email || !form.email.match(regexEmail)) {
      emailError = ' Email non valide. Ex : Jean@mail.com';
    }
    if (!form.password || form.password.length < 6) {
      passwordError = 'Minimum 6 caractères';
    }
    if (
      !form.verficationPassword ||
      form.verficationPassword !== form.password
    ) {
      verificationPasswordError = 'Les mots de passe doivent etre identique';
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
      return;
    }
    navigation.navigate('RegisterAddressUser', {
      formUser: form,
    });
  };

  return (
    <Block safe flex style={{backgroundColor: theme.COLORS.WHITE}}>
      <NavBar
        back
        leftIconSize={50}
        title="S'enregistrer"
        onLeftPress={() => navigation.navigate('Login')}
        titleStyle={{fontSize: 20}}
      />
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                back
                rounded
                placeholder="Prénom *"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, firstName: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              {firstNameError && (
                <Text color="red" size={11} italic style={{marginLeft: 20}}>
                  {firstNameError}
                </Text>
              )}
              <Input
                rounded
                placeholder="Nom *"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, lastName: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              {lastNameError && (
                <Text color="red" size={11} italic style={{marginLeft: 20}}>
                  {lastNameError}
                </Text>
              )}
              <Input
                rounded
                type="email-address"
                placeholder="Adresse email *"
                autoCapitalize="none"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, email: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              {emailError && (
                <Text color="red" size={11} italic style={{marginLeft: 20}}>
                  {emailError}
                </Text>
              )}
              <Input
                rounded
                password
                viewPass
                placeholder="Mot de passe *"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, password: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />

              {passwordError && (
                <Text color="red" size={11} italic style={{marginLeft: 20}}>
                  {passwordError}
                </Text>
              )}
              <Input
                rounded
                password
                viewPass
                placeholder="Confirmation du mot de passe *"
                style={{width: width * 0.9}}
                onChangeText={text =>
                  setForm({...form, verficationPassword: text})
                }
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              {verificationPasswordError && (
                <Text color="red" size={11} italic style={{marginLeft: 20}}>
                  {verificationPasswordError}
                </Text>
              )}
            </Block>
            <Block flex middle>
              <Button
                round
                size="large"
                color={theme.COLORS.BASIC_ORANGE}
                onPress={() => goToAddress()}>
                Suivant
              </Button>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default RegisterScreen;
