import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./comp/login";
import CadastroScreen from "./comp/cadastro";
import HomeScreen from "./comp/home";

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen name="login" component={LoginScreen}/>
      <Stack.Screen name="cadastro" component={CadastroScreen}/>
      <Stack.Screen name="homescreen" component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>

)}