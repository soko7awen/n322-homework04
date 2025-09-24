import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style="styles.title">Student Hub - Help</Text>
      <Text style={styles.text}>For help with Student Hub, visit <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/soko7awen/n322-homework04')}>
        https://github.com/soko7awen/n322-homework04</Text></Text>
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
    },
    link: {
      color: "blue",
      textDecorationLine: "underline",
    }
})