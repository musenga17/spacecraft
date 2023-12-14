import { CardItem } from "./CardItem";
import React from "react";
import { View } from "react-native";

export default {
  title: "CardItem"
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <CardItem
      name={"XWing"}
      model={"T"}
      crew={"2"}
      hyperdrive={"12345"}
      cost={"1000"}
    />
  </View>
);

export const WithManyData = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <CardItem
      name={"XWing XWing XWing XWing XWing XWing"}
      model={""}
      crew={"218274y124389y2349823 4"}
      hyperdrive={"12"}
      cost={"1000000000000000000000"}
    />
  </View>
);

Default.story = {
  name: "CardItem"
};
