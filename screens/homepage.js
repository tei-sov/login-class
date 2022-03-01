import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const homepage = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Userprofile")}
        >
          <Feather name="user" size={27} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="md-reorder-three-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.tx2}>Welcome,</Text>
      </View>
      <View style={styles.bx1}>
        {/* <Image
          style={{ resizeMode: "contain", alignSelf: "center", height: 100 }}
          source={require("../assets/coll.jpg")}
        /> */}

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Createpoll")}
          style={{
            backgroundColor: "#c30a0a",
            justifyContent: "center",
            margin: 10,
            borderRadius: 5,
            padding: 10,
            width: "70%",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            CREATE POLL
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bx2}>
        <TouchableOpacity
          style={{
            backgroundColor: "#c30a0a",
            justifyContent: "center",
            margin: 10,
            borderRadius: 5,
            padding: 10,
            width: "70%",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>CHECK POLL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bx3}>
        <TouchableOpacity
          style={{
            backgroundColor: "#c30a0a",
            justifyContent: "center",
            margin: 10,
            borderRadius: 5,
            padding: 10,
            width: "70%",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>TRACK POLL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.empty}></View>
    </View>
  );
};

export default homepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },

  user: {
    flex: 0.2,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  welcome: {
    flex: 0.3,
    // backgroundColor: "orange",
  },

  bx1: {
    flex: 1,
    // backgroundColor: "green",
    borderRadius: 10,
    borderWidth: 1.5,
    margin: 10,
  },

  bx2: {
    flex: 1,
    // backgroundColor: "yellow",
    borderRadius: 10,
    borderWidth: 1.5,
    margin: 10,
  },

  bx3: {
    flex: 1,
    // backgroundColor: "blue",
    borderRadius: 10,
    borderWidth: 1.5,
    margin: 10,
  },

  empty: {
    flex: 0.1,
  },

  tx2: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
