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
}) {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      label={label}
      leftIcon={leftIcon}
    />
  );
}

const styles = StyleSheet.create({});
