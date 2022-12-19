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
import { logout } from "../../redux/features/authSlice";

// import style
import { SettingsStyles } from "../../styles/HomeStyles/SettingsStyles";
import { ThemeStyles } from "../../styles/ThemeStyles";

const Profile = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const { user, loggedIn } = useSelector((state) => state.auth);
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
        <TouchableOpacity
          onPress={() => {
            // console.log(loggedIn);
            dispatch(logout());
          }}
          style={SettingsStyles.LogOutOptionContainer}
        >
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
