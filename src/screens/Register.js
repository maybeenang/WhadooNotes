import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";

import { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SignUp from "../assets/flatImage/SignUp.svg";

// import redux
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/features/authSlice";
import axios from "axios";

// import styles
import { RegisterStyles } from "../styles/RegisterStyles";
import { ThemeStyles } from "../styles/ThemeStyles";
import { ScrollView } from "react-native-gesture-handler";

const Register = ({ navigation }) => {
  // get theme from redux
  const { darkMode } = useSelector((state) => state.darkMode);
  const { user, error } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   loading ? alert("Please wait...") : null;
  // }, [loading]);

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
              onChangeText={(text) => setName(text)}
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
              onChangeText={(text) => setEmail(text)}
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
              onChangeText={(text) => setPassword(text)}
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
              onChangeText={(text) => setPassword2(text)}
            />
          </View>
          <TouchableOpacity
            disabled={loading}
            style={[
              RegisterStyles.button,
              darkMode ? ThemeStyles.buttonLight : ThemeStyles.buttonDark,
            ]}
            onPress={async () => {
              try {
                if (
                  name === "" ||
                  email === "" ||
                  password === "" ||
                  password2 === ""
                ) {
                  alert("Please fill all the fields");
                  return;
                }

                if (password !== password2) {
                  alert("Password does not match");
                  return;
                }

                setLoading(true);

                const res = await axios.post(
                  "http://192.168.1.10:3000/api/users",
                  {
                    name,
                    email,
                    password,
                  }
                );
                setLoading(false);
                dispatch(register(res.data));

                navigation.navigate("Verify");
              } catch (error) {
                setLoading(false);
                alert(error.response.data.message);
              }
            }}
          >
            <Text
              style={[
                RegisterStyles.subTitle,
                darkMode ? { color: "#fff" } : { color: "#4B4B4B" },
              ]}
            >
              {loading ? "Loading..." : "Sign Up"}
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
