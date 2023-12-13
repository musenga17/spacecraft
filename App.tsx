import { Button, TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FormInput } from "./components/FormInput";

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SPACECRAFT</Text>
      </View>
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
          right={
            <TextInput.Icon
              icon="eye-off"
            />
          }
        />
        <Button
          style={styles.submitButton}
          mode="contained"
        >
          Login
        </Button>
        <TouchableOpacity>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    backgroundColor: "purple",
    height: "40%"
  },
  title: {
    color: "white",
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
  tocText: {
    textAlign: "center",
    fontSize: 14,
    color: "#9CA3AF",
  },
});
