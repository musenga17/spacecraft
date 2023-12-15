import { Card, Text } from "react-native-paper";

import React from "react";
import { Routes } from "~/navigation/Routes";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface CardItemProps {
  name: string;
  model: string;
  crew: string;
  hyperdrive: string;
  cost: string;
  starshipClass: string;
  manufacturer: string;
  maxAtmospheringSpeed: string;
  consumables: string;
  cargoCapacity: string;
}

export const CardItem = ({
  name,
  model,
  crew,
  hyperdrive,
  cost,
  starshipClass,
  manufacturer,
  maxAtmospheringSpeed,
  consumables,
  cargoCapacity
}: CardItemProps) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, {
      starshipClass: starshipClass
    });
  };

  return (
    <Card
      style={styles.card}
      onPress={handlePress}
    >
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
