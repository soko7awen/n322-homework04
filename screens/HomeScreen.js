import { Button, FlatList, Pressable, View, Text, StyleSheet } from 'react-native'
import React from 'react'

const recipes = [
    { id: "1", name: "Spaghetti Bolognese", description: "A classic italian pasta dish."},
    { id: "2", name: "Chicken Curry", description: "A classic curry dish."},
    { id: "3", name: "Beef Stroganoff", description: "A classic beef dish."}

];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipes</Text>
      <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('Details', { recipe: item })}>
            <Text style={styles.cardTitle}>{item.name}</Text>
        </Pressable>
        )}
        />

        <Button title="About This App" onPress={() => navigation.navigate("About")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
    }
});