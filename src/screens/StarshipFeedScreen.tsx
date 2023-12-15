import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import { ActivityIndicator } from "react-native-paper";
import { CardItem } from "~/components/CardItem";
import React from "react";
import { Routes } from "~/navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { useStarships } from "~/hooks/useStarships";

export const StarshipFeedScreen = () => {
  const { data, isError, isLoading } = useStarships();

  if (isError) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.error}>
          Une erreur est survenue, veuillez réessayer ultérieurement
        </Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.containerCenter}>
        <ActivityIndicator size="large" />
        <Text style={styles.error}>
          Chargement des vaisseaux spatiaux en cours
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <CardItem
            name={item.name}
            model={item.model}
            crew={item.crew}
            hyperdrive={item.hyperdrive_rating}
            cost={item.cost_in_credits}
            starshipClass={item.starship_class}
            manufacturer={item.manufacturer}
            maxAtmospheringSpeed={item.max_atmosphering_speed}
            consumables={item.consumables}
            cargoCapacity={item.cargo_capacity}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0 // only for Android to avoid status bar overlap
  },
  containerCenter: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  error: {
    color: "red"
  }
});
