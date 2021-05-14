import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';
// galio component
import {Block, Button, Input, NavBar} from 'galio-framework';
import theme from '../theme';
import {userService} from '../services/UserService';
import {add} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
const RegisterScreen = ({route, navigation}) => {
  const {formUser} = route.params;
  console.log(formUser);
  const [address, setAddress] = useState({
    city: '',
    country: '',
    streetName: '',
    postalCode: '',
    type: 'home',
  });

  const onSubmit = () => {
    const user = {
      firstName: formUser?.firstName,
      lastName: formUser?.lastName,
      email: formUser?.email,
      password: formUser?.password,
      address: [
        {
          streetName: address?.streetName,
          city: address?.city,
          postalCode: address?.postalCode,
          country: address?.country,
        },
      ],
    };
    console.log(user);
    userService
      .register(
        formUser.firstName,
        formUser.lastName,
        formUser.email,
        formUser.password,
        address,
      )
      .then(response => {
        console.log(response);
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log('err', error), console.log('err2');
      });
  };
  return (
    <Block safe flex style={{backgroundColor: theme.COLORS.WHITE}}>
      <NavBar
        leftIconSize={50}
        back
        title="S'enregistrer"
        onLeftPress={() =>
          navigation.navigate('RegisterUser', {address: address})
        }
        titleStyle={{fontSize: 20}}
      />
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block flex={2} center space="evenly">
          <Block flex={2}>
            <Input
              rounded
              placeholder="Ville"
              style={{width: width * 0.9}}
              onChangeText={text => setAddress({...address, city: text})}
              placeholderTextColor={theme.COLORS.BASIC_BLUE}></Input>
            <Input
              rounded
              placeholder="Pays"
              style={{width: width * 0.9}}
              onChangeText={text => setAddress({...address, country: text})}
              placeholderTextColor={theme.COLORS.BASIC_BLUE}
            />
            <Input
              rounded
              placeholder="Adresse complete"
              style={{width: width * 0.9}}
              onChangeText={text => setAddress({...address, streetName: text})}
              placeholderTextColor={theme.COLORS.BASIC_BLUE}
            />
            <Input
              rounded
              placeholder="Code postal"
              style={{width: width * 0.9}}
              onChangeText={text => setAddress({...address, postalCode: text})}
              placeholderTextColor={theme.COLORS.BASIC_BLUE}
            />
          </Block>
          <Block flex middle>
            <Button
              round
              size="large"
              color={theme.COLORS.BASIC_ORANGE}
              onPress={() => onSubmit()}>
              S'enregistrer
            </Button>
          </Block>
        </Block>
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
