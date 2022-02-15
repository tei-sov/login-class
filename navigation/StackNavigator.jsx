import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "../screens/welcomepage";
import Loginpage from "../screens/loginpage";
import Createaccount from "../screens/createaccount";
import Homepage from "../screens/homepage";
import userprofile from "../screens/userprofile";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const Stacknavigator = ({ auth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        //Returning screens based on users login status
        {auth.login && auth.user ? (
          <Stack.Group>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Userprofile"
              component={userprofile}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
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
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Access state within component
const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

//Connecting component to redux
export default connect(mapStateToProps, null)(Stacknavigator);
