import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class Homepage extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b80000",
  },
});
