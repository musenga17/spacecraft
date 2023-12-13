import { Button, TextInput } from "react-native-paper"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { FormInput } from "../components/FormInput"
import { Header } from "../components/Header"
import { useState } from "react"

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function LoginScreen() {
  const [isPassWordHide, setIsPasswordHide] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <Header title="SpaceCraft" />
      <View style={styles.content}>
        <FormInput
          label="Email"
          returnKeyType="next"
          keyboardType="email-address"
          autoComplete="email"
        />
        <FormInput
          label="Password"
          autoComplete="password"
          secureTextEntry={isPassWordHide}
          right={
            <TextInput.Icon
              icon={isPassWordHide ? "eye-off" : "eye"}
              onPress={() => setIsPasswordHide(!isPassWordHide)}
            />
          }
        />
        <Button style={styles.submitButton} mode="contained">
          Login
        </Button>
        <TouchableOpacity>
          <Text style={styles.tocText}>by login you accept the Terms and Conditions.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 16
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16
  },
  tocText: {
    textAlign: "center",
    fontSize: 14,
    color: "#9CA3AF"
  }
})
