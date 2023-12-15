import { StyleSheet, Text, View } from "react-native";

import { Appbar } from "react-native-paper";
import { Header } from "~/components/Header";
import React from "react";
import { Routes } from "~/navigation/Routes";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function StarshipDetailsScreen({
  route,
  navigation
}: StackScreenProps<any>) {
  //const navigation = useNavigation<any>();

  function goBack() {
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
      </Appbar.Header>
      <Header title={route.params?.starshipClass} />
    </View>
  );
}

const styles = StyleSheet.create({});
