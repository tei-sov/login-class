import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const Createpoll = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.empty}></View>
      <View style={styles.title}>
        <Text style={{ fontSize: 25, color: "#a9a9a9", margin: 5 }}>
          Name of Poll
        </Text>
        <TextInput
          style={{
            height: "30%",
            width: "80%",
            backgroundColor: "#a9a9a9",
            borderRadius: 40,
            margin: 5,
            // alignSelf: "center",
          }}
          placeholder="Codetrain-Election"
        ></TextInput>
      </View>
      <View style={styles.number}>
        <Text style={{ fontSize: 25, color: "#a9a9a9", margin: 5 }}>
          Number of Candidates
        </Text>
        <TextInput
          style={{
            height: "30%",
            width: "80%",
            backgroundColor: "#a9a9a9",
            borderRadius: 40,
            margin: 5,
            // alignSelf: "center",
          }}
          placeholder="15"
        ></TextInput>
      </View>
      <View style={styles.candidate}>
        <Text style={{ fontSize: 25, color: "#a9a9a9", margin: 5 }}>
          Add Candidates
        </Text>
        <TextInput
          style={{
            height: "30%",
            width: "80%",
            backgroundColor: "#a9a9a9",
            borderRadius: 40,
            margin: 5,
            // alignSelf: "center",
          }}
          placeholder="Mr . Okai"
        ></TextInput>
      </View>
    </View>
  );
};

export default Createpoll;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },

  empty: {
    flex: 0.3,
  },

  title: {
    flex: 0.4,
    margin: 5,
    // backgroundColor: "red",
  },

  number: {
    flex: 0.4,
    margin: 5,
    // backgroundColor: "blue",
  },

  candidate: {
    flex: 0.4,
    margin: 5,
    // backgroundColor: "yellow",
  },
});
