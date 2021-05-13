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

const {height, width} = Dimensions.get('window');

const RegisterScreen = ({navigation}) => {
  const [form, setForm] = useState({email: '', password: ''});

  return (
    <Block safe flex style={{backgroundColor: theme.COLORS.WHITE}}>
      <NavBar
        back
        title="S'enregistrer"
        onLeftPress={() => navigation.navigate('Login')}
        titleStyle={{fontSize: 20}}
      />
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block
          flex
          center
          style={{
            marginTop: height * 0.05,
            marginBottom: height * 0.1,
          }}>
          <Block
            row
            center
            space="between"
            style={{marginVertical: theme.SIZES.BASE * 1.875}}>
            <Image
              source={require('../assets/Images/Logo.png')}
              style={{width: 150, height: 150}}></Image>
          </Block>
        </Block>

        <Block flex={2} center space="evenly">
          <Block flex={2}>
            <Input
              rounded
              type="email-address"
              placeholder="Email"
              autoCapitalize="none"
              style={{width: width * 0.9}}
              onChangeText={text => setEmail(text)}
            />
            <Input
              rounded
              password
              viewPass
              placeholder="Password"
              style={{width: width * 0.9}}
              onChangeText={text => setPassword(text)}
            />
            <Text
              color={theme.COLORS.BASIC_BLUE}
              size={theme.SIZES.FONT * 0.75}
              onPress={() => Alert.alert('Not implemented')}
              style={{
                alignSelf: 'flex-end',
                lineHeight: theme.SIZES.FONT * 2,
              }}>
              Forgot your password?
            </Text>
          </Block>
          <Block flex middle>
            <Button
              round
              size="large"
              color={theme.COLORS.BASIC_ORANGE}
              onPress={() =>
                Alert.alert(
                  'Sign in action',
                  `Email: ${email}
Password: ${password}`,
                )
              }>
              Connexion
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
