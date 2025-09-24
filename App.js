import React from 'react';
import { Button, Pressable, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import HelpScreen from './screens/HelpScreen';
import DetailsScreen from './screens/DetailsScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Resources') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'darkorange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen}
      options={({ navigation }) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Help')}>
                <Text style={styles.helpBtn}>Help</Text>
              </Pressable>
            ),
          })}/>
      <Tab.Screen name="Resources" component={ResourcesScreen}
        options={({ navigation }) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Help')}>
                <Text style={styles.helpBtn}>Help</Text>
              </Pressable>
            ),
          })}/>
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={({ navigation }) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Help')}>
                <Text style={styles.helpBtn}>Help</Text>
              </Pressable>
            ),
          })}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpBtn: {
    color: "blue",
    marginRight: 10,
  }
});
