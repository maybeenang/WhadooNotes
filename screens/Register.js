import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: "600"
        }}>Register.svg</Text>
      </View>
      <View style={styles.pageNameContainer}>
        <Text style={styles.pageName}>Sign Up</Text>
      </View>
      <View>
        <View>
          
        </View>
      </View>
    </View>
  );
};

export default Register;

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
  pageNameContainer: {
    width: 313
  },
  pageName: {
    fontSize: 36,
    fontWeight: "900", 
    color: "#4B4B4B"
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
