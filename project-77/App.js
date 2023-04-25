import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import DailyPicScreen from "./screens/DailyPic";
import StarMapScreen from "./screens/StarMap";
var stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator initalRouteName="Home" screenOptions={{headerShown:false}}>
    <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
    <stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}></stack.Screen>
    <stack.Screen name="DailyPic" component={DailyPicScreen}></stack.Screen>
    <stack.Screen name="StarMap" component={StarMapScreen}></stack.Screen>
    </stack.Navigator>
    </NavigationContainer>
  );
}



