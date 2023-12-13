import { Avatar, Button, Card } from 'react-native-paper';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"

import React from "react"
import { default as data } from "../../api/data.json"

interface ItemProps {
  name: string
  model: string
  crew: string
  hyperdrive: string
  cost: string
}

const Item = ({ name, model, crew, hyperdrive, cost }: ItemProps) => {
  return (

    <Card style={styles.card}>
      <Card.Title title={name}/>
      <Card.Content style={styles.cardContent}>
      <Text>model: {model}</Text>
      <Text>crew : {crew}</Text>
      <Text>hyperdrive_rating : {hyperdrive}</Text>
      <Text>cost_in_credits : {cost}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
  )
}

export const StarshipFeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <Item
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
  card: {
    flex: 2,
    flexDirection: "column",
    padding: 20,
    marginVertical: 20,
    backgroundColor: "#6ec075",
    shadowOpacity: 1,
  },
  cardContent: {
    marginBottom: 10
  }
})
