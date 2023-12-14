import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

interface ItemProps {
  name: string;
  model: string;
  crew: string;
  hyperdrive: string;
  cost: string;
}

export const CardItem = ({
  name,
  model,
  crew,
  hyperdrive,
  cost
}: ItemProps) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={name} />
      <Card.Content style={styles.cardContent}>
        <Text>model: {model}</Text>
        <Text>crew : {crew}</Text>
        <Text>hyperdrive_rating : {hyperdrive}</Text>
        <Text>cost_in_credits : {cost}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#6ec075",
    flex: 2,
    flexDirection: "column",
    marginVertical: 20,
    padding: 20,
    shadowOpacity: 1
  },
  cardContent: {
    marginBottom: 10
  }
});
