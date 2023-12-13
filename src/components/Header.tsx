import { StyleSheet, Text, View } from "react-native"

import React from "react"

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    backgroundColor: "purple",
    height: "40%"
  },
  title: {
    color: "white",
    margin: 24,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  }
})

