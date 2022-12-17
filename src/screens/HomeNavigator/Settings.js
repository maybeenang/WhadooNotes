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

// import redux
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/features/darkModeSlice";

// import style
import { SettingsStyles } from "../../styles/HomeStyles/SettingsStyles";
import { ThemeStyles } from "../../styles/ThemeStyles";

const Profile = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={[
        SettingsStyles.container,
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <View style={SettingsStyles.profileHeader}>
        <View
          style={[
            SettingsStyles.iconUserContainer,
            darkMode ? null : ThemeStyles.buttonTodoDark,
          ]}
        >
          <SimpleLineIcons
            name="user"
            size={64}
            color={darkMode ? "#787878" : "#D4D4D4"}
          />
        </View>
        <View>
          <Text
            style={[
              SettingsStyles.userStyle,
              darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
            ]}
          >
            User
          </Text>
          <Text style={SettingsStyles.mailStyle}>user@gmail.com</Text>
          <TouchableOpacity
            style={[
              SettingsStyles.changePictureContainer,
              darkMode ? null : { borderColor: "#D4D4D4" },
            ]}
          >
            <Octicons
              name="pencil"
              size={12}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
            <Text
              style={{
                color: `${darkMode ? "#787878" : "#D4D4D4"}`,
                fontSize: 10,
                marginLeft: 10,
              }}
            >
              Change profile pictures
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={SettingsStyles.optionContainer}>
        <Text
          style={[
            SettingsStyles.tittleContainer,
            darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
          ]}
        >
          Account
        </Text>
        <TouchableOpacity
          style={[
            SettingsStyles.innerOptionContainer,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
        >
          <View style={SettingsStyles.optionDesc}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
            <Text
              style={[
                SettingsStyles.optionTextDecs,
                darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
              ]}
            >
              Change Password
            </Text>
          </View>
          <View style={SettingsStyles.buttonOption}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={12}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            SettingsStyles.innerOptionContainer,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
        >
          <View style={SettingsStyles.optionDesc}>
            <Feather
              name="smile"
              size={24}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
            <Text
              style={[
                SettingsStyles.optionTextDecs,
                darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
              ]}
            >
              Change Username
            </Text>
          </View>
          <View style={SettingsStyles.buttonOption}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={12}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={SettingsStyles.optionContainer}>
        <Text
          style={[
            SettingsStyles.tittleContainer,
            darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
          ]}
        >
          Theme
        </Text>
        <TouchableOpacity
          style={[
            SettingsStyles.innerOptionContainer,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
          onPress={() => {
            dispatch(toggleDarkMode());
          }}
        >
          <View style={SettingsStyles.optionDesc}>
            <Feather
              name="moon"
              size={24}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
            <Text
              style={[
                SettingsStyles.optionTextDecs,
                darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
              ]}
            >
              Dark Mode
            </Text>
          </View>
          <View>
            {darkMode ? (
              <MaterialCommunityIcons
                name="toggle-switch-off-outline"
                size={30}
                color={darkMode ? "#787878" : "#D4D4D4"}
                borderWidth="1"
              />
            ) : (
              <MaterialCommunityIcons
                name="toggle-switch-outline"
                size={30}
                color={darkMode ? "#787878" : "#D4D4D4"}
                borderWidth="1"
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={SettingsStyles.optionContainer}>
        <Text
          style={[
            SettingsStyles.tittleContainer,
            darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
          ]}
        >
          Other
        </Text>
        <TouchableOpacity
          style={[
            SettingsStyles.innerOptionContainer,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
        >
          <View style={SettingsStyles.optionDesc}>
            <MaterialCommunityIcons
              name="folder-open-outline"
              size={24}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
            <Text
              style={[
                SettingsStyles.optionTextDecs,
                darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
              ]}
            >
              Archived Notes
            </Text>
          </View>
          <View style={SettingsStyles.buttonOption}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={12}
              color={darkMode ? "#787878" : "#D4D4D4"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={SettingsStyles.LogOutOptionContainer}>
          <View style={SettingsStyles.optionDesc}>
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
