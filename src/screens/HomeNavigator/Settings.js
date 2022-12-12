import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.iconUserContainer}>
          <SimpleLineIcons name="user" size={64} color="black" />
        </View>
        <View>
          <Text style={styles.userStyle}>User</Text>
          <Text style={styles.mailStyle}>user@gmail.com</Text>
          <TouchableOpacity style={styles.changePictureContainer}>
            <Octicons name="pencil" size={12} color="black" />
            <Text
              style={{
                color: "#676767",
                fontSize: 10,
                marginLeft: 10,
              }}
            >
              Change profile pictures
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.tittleContainer}>Account</Text>
        <TouchableOpacity style={styles.innerOptionContainer}>
          <View style={styles.optionDesc}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="#676767"
            />
            <Text style={styles.optionTextDecs}>Change Password</Text>
          </View>
          <View style={styles.buttonOption}>
            <MaterialIcons name="arrow-forward-ios" size={12} color="#676767" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerOptionContainer}>
          <View style={styles.optionDesc}>
            <Feather name="smile" size={24} color="#676767" />
            <Text style={styles.optionTextDecs}>Change Username</Text>
          </View>
          <View style={styles.buttonOption}>
            <MaterialIcons name="arrow-forward-ios" size={12} color="#676767" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.tittleContainer}>Theme</Text>
        <TouchableOpacity style={styles.innerOptionContainer}>
          <View style={styles.optionDesc}>
            <Feather name="moon" size={24} color="#676767" />
            <Text style={styles.optionTextDecs}>Dark Mode</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="toggle-switch-off-outline"
              size={30}
              color="black"
              borderWidth="1"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.tittleContainer}>Other</Text>
        <TouchableOpacity style={styles.innerOptionContainer}>
          <View style={styles.optionDesc}>
            <MaterialCommunityIcons
              name="folder-open-outline"
              size={24}
              color="#676767"
            />
            <Text style={styles.optionTextDecs}>Archived Notes</Text>
          </View>
          <View style={styles.buttonOption}>
            <MaterialIcons name="arrow-forward-ios" size={12} color="#676767" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LogOutOptionContainer}>
          <View style={styles.optionDesc}>
            <MaterialCommunityIcons name="exit-run" size={24} color="#FF4E4E" />
            <Text
              style={{
                marginLeft: 10,
                color: "#FF4E4E",
              }}
            >
              Log out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  iconUserContainer: {
    height: 120,
    width: 120,
    borderRadius: 5,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%",
  },
  userStyle: {
    fontSize: 35,
    fontWeight: "900",
  },
  mailStyle: {
    fontSize: 15,
    marginBottom: 5,
    color: "#BBBBBB",
  },
  changePictureContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 3,
    padding: 4,
  },
  tittleContainer: {
    color: "#676767",
    fontSize: 18,
  },
  optionContainer: {
    width: "100%",
    marginTop: 30,
  },
  innerOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    marginVertical: 7,
  },
  LogOutOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFECEC",
    padding: 10,
    borderRadius: 5,
    marginVertical: 7,
  },
  optionDesc: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionTextDecs: {
    marginLeft: 10,
    color: "#676767",
  },
  buttonOption: {
    borderWidth: 1,
    borderColor: "#676767",
    borderRadius: 100,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
