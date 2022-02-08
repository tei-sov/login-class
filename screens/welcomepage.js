import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

class Welcomepage extends Component {
  render(props) {
    return (
      <View style={styles.container}>
        <View style={styles.pic}>
          <Image
            style={{ height: "100%", width: "100%", marginTop: 40 }}
            source={require("../assets/thumb3.png")}
          />
        </View>
        <View style={styles.logs}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Loginpage")}
            style={{
              backgroundColor: "#c30a0a",
              justifyContent: "center",
              margin: 10,
              borderRadius: 5,
              padding: 10,
              alignSelf: "center",
              width: "70%",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              LOG IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Createaccount")}
            style={{
              backgroundColor: "#c30a0a",
              justifyContent: "center",
              margin: 10,
              borderRadius: 5,
              padding: 10,
              alignSelf: "center",
              width: "70%",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcomepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },

  pic: {
    flex: 0.5,
    // backgroundColor: "red",
  },

  logs: {
    flex: 0.5,
    marginTop: 80,
    // backgroundColor: "white",
  },
});
