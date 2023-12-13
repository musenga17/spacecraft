import React from "react";
import { TextInput } from "react-native-paper";
import type { TextInputProps } from "react-native-paper";
import { View } from "react-native";

export const FormInput = ({
  label,
  value,
  onChangeText,
  ...rest
}: TextInputProps) => (
  <View style={{ paddingVertical: 8 }}>
    <TextInput
      {...rest}
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);