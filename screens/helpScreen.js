import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style="styles.title">Student Hub - Help</Text>
      <Text style="styles.text">
        For help with Student Hub, visit https://
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
    }
})