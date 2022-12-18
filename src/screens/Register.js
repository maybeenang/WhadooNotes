import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SignUp from "../assets/flatImage/SignUp.svg";

// import redux
import { useSelector } from "react-redux";

// import styles
import { RegisterStyles } from "../styles/RegisterStyles";
import { ThemeStyles } from "../styles/ThemeStyles";
import { ScrollView } from "react-native-gesture-handler";

const Register = ({ navigation }) => {
  // get theme from redux
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <KeyboardAvoidingView
      style={[
        RegisterStyles.container,
        { padding: 0 },
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView
          style={[
            RegisterStyles.container,
            darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
          ]}
        >
          <TouchableOpacity
            style={RegisterStyles.toggle}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
            />
          </TouchableOpacity>
          <SignUp width={300} height={300} style={RegisterStyles.flatImage} />
          <Text
            style={[
              RegisterStyles.title,
              darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
            ]}
          >
            Sign Up
          </Text>
          <View style={[RegisterStyles.inpuContainer, { marginTop: 30 }]}>
            <AntDesign
              name="user"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
              style={{ marginRight: 20 }}
            />
            <TextInput
              style={[
                RegisterStyles.input,
                darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
              ]}
              placeholder="Username"
              placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
            />
          </View>
          <View style={RegisterStyles.inpuContainer}>
            <MaterialIcons
              name="alternate-email"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
              style={{ marginRight: 20 }}
            />
            <TextInput
              style={[
                RegisterStyles.input,
                darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
              ]}
              placeholder="Email"
              placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
            />
          </View>
          <View style={RegisterStyles.inpuContainer}>
            <AntDesign
              name="lock1"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
              style={{ marginRight: 20 }}
            />
            <TextInput
              style={[
                RegisterStyles.input,
                darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
              ]}
              placeholder="Password"
              placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
            />
          </View>
          <View style={[RegisterStyles.inpuContainer, { marginBottom: 30 }]}>
            <AntDesign
              name="unlock"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
              style={{ marginRight: 20 }}
            />
            <TextInput
              style={[
                RegisterStyles.input,
                darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
              ]}
              placeholder="Re-enter Password"
              placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
            />
          </View>
          <TouchableOpacity
            style={[
              RegisterStyles.button,
              darkMode ? ThemeStyles.buttonLight : ThemeStyles.buttonDark,
            ]}
            onPress={() => {
              navigation.navigate("Verify");
            }}
          >
            <Text
              style={[
                RegisterStyles.subTitle,
                darkMode ? { color: "#fff" } : { color: "#4B4B4B" },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={RegisterStyles.otherTextContainer}>
            <Text
              style={[
                RegisterStyles.subTitle,
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
                  RegisterStyles.subTitle,
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
