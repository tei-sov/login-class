import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import React from "react";

const userprofile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.pic}>
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: "red",

            borderRadius: 75,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
            source={require("../assets/voter1.jpg")}
          />
        </View>
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
          <Text style={{ fontSize: 30, margin: 8 }}>Password</Text>
          <TextInput
            secureTextEntry
            style={{ margin: 8 }}
            placeholder="......"
          ></TextInput>
        </View>
      </View>
      <View style={styles.create}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
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
            EDIT PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default userprofile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },

  pic: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  details: {
    flex: 0.5,
    // backgroundColor: "blue",
  },

  create: {
    flex: 0.2,
    // backgroundColor: "yellow",
  },
});
