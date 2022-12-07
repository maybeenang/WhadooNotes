import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import React from "react";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={{
          color: "#fff", 
          fontSize: 36,
          fontWeight: "600"}}>Welcome.svg</Text>
      </View>
      <View>
        <Text style={styles.appName}>WhadooNotes</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descpription}>Create notes anywhere and everytime</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{
          color: "#292929",
          fontSize: 16
        }}>Already have account ? </Text>
        <TouchableOpacity>
          <Text style={{
            color: "#0029FF",
            fontSize: 16,
            textDecorationLine: "underline"
          }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 313,
    height: 313,
    backgroundColor: "#4b4b4b",
    justifyContent: "center",
    alignItems: "center"
  },
  appName: {
    fontSize: 36,
    fontWeight: "600", 
    color: "#787878",
  },
  descriptionContainer: {
    width: 249,
    height: 38
  },
  descpription: {
    fontSize: 16,
    opacity: 0.8,
    color: "#4B4B4B",
    textAlign: "center"
  },
  button: {
    marginTop: 87,
    width: 233,
    height: 39,
    backgroundColor: "#292929",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }, 
  buttonText: {
    fontSize: 16,
    color: "#fff"
  },
  footer: {
    marginTop: 29,
    flexDirection: "row"
  }
});
