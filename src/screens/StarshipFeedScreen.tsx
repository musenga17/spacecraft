import { ActivityIndicator, Avatar, Button, Card } from "react-native-paper"
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"

import { CardItem } from "~/components/CardItem"
import React from "react"
import { useStarships } from "~/hooks/useStarships"

interface ItemProps {
  name: string
  model: string
  crew: string
  hyperdrive: string
  cost: string
}

export const StarshipFeedScreen = () => {
  const { data, isError, isLoading } = useStarships()

  if (isError) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.error}>Une erreur est survenue, veuillez réessayer ultérieurement</Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View style={styles.containerCenter}>
        <ActivityIndicator size="large" />
        <Text style={styles.error}>Chargement des vaisseaux spatiaux en cours</Text>
      </View>
    )
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
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0 // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  error: {
    color: "red"
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
