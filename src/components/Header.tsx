import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "purple",
    height: "40%",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    margin: 24,
    textAlign: "center"
  }
});
