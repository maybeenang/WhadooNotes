import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import svg
import WelcomeSvg from "../assets/flatImage/WelcomeSvg.svg";
import { SafeAreaView } from "react-native-safe-area-context";

// import redux
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/features/darkModeSlice";

// import styles
import { WelcomeStyles } from "../styles/WelcomeStyles";
import { ThemeStyles } from "../styles/ThemeStyles";

const Welcome = ({ navigation }) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={[
        WelcomeStyles.container,
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <TouchableOpacity
        style={WelcomeStyles.toggle}
        onPress={() => {
          dispatch(toggleDarkMode());
        }}
      >
        {darkMode ? (
          <Ionicons name="moon" size={24} color="#292929" />
        ) : (
          <Ionicons name="sunny" size={24} color="#fff" />
        )}
      </TouchableOpacity>
      <WelcomeSvg width={300} height={300} style={WelcomeStyles.flatImage} />
      <Text
        style={[
          WelcomeStyles.title,
          darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
        ]}
      >
        WhadooNotes{" "}
      </Text>
      <View style={[{ width: "70%" }]}>
        <Text
          style={[
            WelcomeStyles.subTitle,
            darkMode ? ThemeStyles.subTitleLight : ThemeStyles.subTitleDark,
          ]}
        >
          Create notes anywhere and everytime
        </Text>
      </View>
      <TouchableOpacity
        style={[
          WelcomeStyles.button,
          darkMode ? ThemeStyles.buttonLight : ThemeStyles.buttonDark,
        ]}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text
          style={[
            WelcomeStyles.subTitle,
            darkMode ? { color: "#fff" } : { color: "#4B4B4B" },
          ]}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <View style={WelcomeStyles.otherTextContainer}>
        <Text
          style={[
            WelcomeStyles.subTitle,
            { fontSize: 18, fontWeight: "500" },
            darkMode ? ThemeStyles.subTitleLight : ThemeStyles.subTitleDark,
          ]}
        >
          Already have an account?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={[
              WelcomeStyles.subTitle,
              {
                textDecorationLine: "underline",
                fontSize: 18,
              },
              darkMode ? { color: "#0029FF" } : { color: "#7E93FF" },
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
