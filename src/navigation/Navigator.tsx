import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "~/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./Routes";
import { TermsScreen } from "~/screens/TermsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Routes.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={Routes.TERMS_SCREEN}
          component={TermsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
