import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

/**
 *
 * @param {Array} leftIcon - Add Icon to the left
 */
export default function DefaultInput({
  placeholder,
  onChangeText,
  label,
  leftIcon,
  styles,
  errorMessage,
  secureTextEntry,
}) {
  return (
    <Input
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={onChangeText}
      label={label}
      leftIcon={leftIcon}
      style={styles}
      errorMessage={errorMessage}
    />
  );
}

const styles = StyleSheet.create({});
