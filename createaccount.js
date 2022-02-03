import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

class Createaccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newuser}>
          <AntDesign
            name="adduser"
            size={40}
            color="black"
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          />
        </View>
        <View style={styles.details}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ fontSize: 30, margin: 8 }}>First Name</Text>
            <TextInput style={{ margin: 8 }} placeholder="Kwame"></TextInput>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ fontSize: 30, margin: 8 }}>Last Name</Text>
            <TextInput style={{ margin: 8 }} placeholder="Nkrumah"></TextInput>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ fontSize: 30, margin: 8 }}> Email</Text>
            <TextInput
              style={{ margin: 8 }}
              placeholder="Kwamenkrumah@gmail.com"
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ fontSize: 30, margin: 8 }}>Password</Text>
            <TextInput
              secureTextEntry
              style={{ margin: 8 }}
              placeholder="......"
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ fontSize: 30, margin: 8 }}>Age</Text>
            <TextInput style={{ margin: 8 }} placeholder="35"></TextInput>
          </View>
        </View>
        <View style={styles.create}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Homepage")}
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

export default Createaccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },

  newuser: {
    flex: 0.1,
    // backgroundColor: "red",
  },

  details: {
    flex: 0.7,
    // backgroundColor: "yellow",
    justifyContent: "center",
  },

  create: {
    flex: 0.2,
    // backgroundColor: "green",
  },
});
