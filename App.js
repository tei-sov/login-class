import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Stacknavigator from "./StackNavigator";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Stacknavigator />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
