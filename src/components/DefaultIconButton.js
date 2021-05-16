import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import theme from '../theme';
export default function DefaultIconButton({icon, onPress, backgroundColor}) {
  return (
    <Button
      icon={icon}
      buttonStyle={[styles.buttonStyle, {backgroundColor: backgroundColor}]}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 5,
    borderColor: theme.COLORS.BASIC_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
