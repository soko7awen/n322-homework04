import { Button, FlatList, Pressable, View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen({ navigation }) {
    const [userName, setUserName] = useState('');

    return (
    <View style={styles.container}>
        <Text style={styles.heading}>Welcome!</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your name."
            value={userName}
            onChangeText={text => setUserName(text)}
        />
        <Button title="Name Details" onPress={() => navigation.navigate("Details", { userName })} />
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