import { Header } from "./Header";
import React from "react";
import { View } from "react-native";

export default {
  title: "Header"
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <Header title={"Bonjour"} />
  </View>
);

Default.story = {
  name: "Header"
};
