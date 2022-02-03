import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "./welcomepage";
import Loginpage from "./loginpage";
import Createaccount from "./createaccount";
import Homepage from "./homepage";

const Stack = createStackNavigator();

const Stacknavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcomepage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Loginpage"
          component={Loginpage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Createaccount"
          component={Createaccount}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigator;

const styles = StyleSheet.create({});
