import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../theme';
import {Icon} from 'react-native-elements';

export default function DefaultIcon({name, type, size, color}) {
  return (
    <View style={styles.iconStyle}>
      <Icon name={name} type={type} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    borderWidth: 5,
    backgroundColor: theme.COLORS.WHITE,
    borderColor: theme.COLORS.OUTLINED_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    borderRadius: 50,
  },
});
