import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {arrowright} from 'react-native-vector-icons';
// galio component
import {Block, Button, Input, NavBar, Text} from 'galio-framework';
import theme from '../theme';

const {height, width} = Dimensions.get('window');

const RegisterScreen = ({navigation}) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verficationPassword: '',
  });

  return (
    <Block safe flex style={{backgroundColor: theme.COLORS.WHITE}}>
      <NavBar
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
                placeholder="Prénom"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, firstName: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              <Input
                rounded
                placeholder="Nom"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, lastName: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, email: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Mot de passe"
                style={{width: width * 0.9}}
                onChangeText={text => setForm({...form, password: text})}
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Confirmation du mot de passe"
                style={{width: width * 0.9}}
                onChangeText={text =>
                  setForm({...form, verficationPassword: text})
                }
                placeholderTextColor={theme.COLORS.BASIC_BLUE}
              />

              <Text
                color={theme.COLORS.BASIC_ORANGE}
                size={theme.SIZES.FONT * 0.75}
                style={{
                  alignSelf: 'flex-end',
                  lineHeight: theme.SIZES.FONT * 2,
                }}>
                Mot de passe oublié?
              </Text>
            </Block>
            <Block flex middle>
              <Button
                round
                size="large"
                color={theme.COLORS.BASIC_ORANGE}
                onPress={() =>
                  navigation.navigate('RegisterAddressUser', {
                    formUser: form,
                  })
                }>
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
