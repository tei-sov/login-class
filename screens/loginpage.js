import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { loginEmailAccount } from "../redux/actions/authActions";

const loginpage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const signIn = () => {
    navigation.navigate("Homepage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.thumb}>
        <Image
          style={{
            height: "40%",
            width: "40%",
            alignSelf: "center",
            resizeMode: "contain",
            // marginTop: 70,
          }}
          source={require("../assets/thumb3.png")}
        />
      </View>
      <View style={styles.mailbox}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ fontSize: 30, margin: 8 }}>Email</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={{ margin: 8 }}
            placeholder="Kwame@gmail.com"
            value={email}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ fontSize: 30, margin: 8 }}>Password</Text>
          <TextInput
            onChangeText={() => setPassword(text)}
            secureTextEntry
            style={{ margin: 8 }}
            placeholder=".............."
            value={password}
          ></TextInput>
        </View>
      </View>

      <View style={styles.btn}>
        <View>
          <TouchableOpacity
            onPress={signIn}
            style={{
              backgroundColor: "#c30a0a",
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 5,
              margin: 10,
              width: "50%",
              padding: 10,
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
        </View>
      </View>

      <View style={styles.forgot}>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                color: "#ca0505",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },

  thumb: {
    flex: 0.4,
    // backgroundColor: "blue",
    justifyContent: "center",
  },

  mailbox: {
    flex: 0.3,
    // backgroundColor: "yellow",
    justifyContent: "center",
  },

  btn: {
    flex: 0.2,
    // backgroundColor: "green",
  },

  forgot: {
    flex: 0.1,
    justifyContent: "center",
    // backgroundColor: "red",
  },
});

// const mapStateToProps=()=>{}
// const mapDispatchToProps={
//   login:loginEmailAccount
// }

// export default connect(null,mapDispatchToProps)(loginpage);

export default loginpage;
