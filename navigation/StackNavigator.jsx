import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "../screens/welcomepage";
import Loginpage from "../screens/loginpage";
import Createaccount from "../screens/createaccount";
import Homepage from "../screens/homepage";
import userprofile from "../screens/userprofile";
import { connect } from "react-redux";
import { StateProvider } from "../StateProvider";
import userReducer, { initialState } from "../redux/reducers/userReducer";
import Createpoll from "../screens/createpoll";

const Stack = createStackNavigator();

const Stacknavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* //Returning screens based on users login status */}
        {/* {auth.login && auth.user ? ( */}
        <Stack.Group>
          <Stack.Screen
            name="Welcomepage"
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

          <Stack.Screen
            name="Createpoll"
            component={Createpoll}
            options={{ headerShown: false }}
            c
          />
        </Stack.Group>
        {/* ) : ( */}
        {/* <Stack.Group> */}

        {/* </Stack.Group> */}
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Access state within component
// const mapStateToProps = (state) => {
//   return {
//     auth: state,
//   };
// };

//Connecting component to redux
// export default connect(mapStateToProps, null)(Stacknavigator);

export default Stacknavigator;
