import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SignIn from "../assets/flatImage/SignIn.svg";
import { useState } from "react";

// import redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";
import axios from "axios";

// import styles
import { LoginStyles } from "../styles/LoginStyles";
import { ThemeStyles } from "../styles/ThemeStyles";

const Login = ({ navigation }) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      style={[
        LoginStyles.container,
        { padding: 0 },
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView
          style={[
            LoginStyles.container,
            darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
          ]}
        >
          <TouchableOpacity
            style={LoginStyles.toggle}
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
          <SignIn width={300} height={300} style={LoginStyles.flatImage} />
          <Text
            style={[
              LoginStyles.title,
              darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
            ]}
          >
            Sign In
          </Text>
          <View style={[LoginStyles.inpuContainer, { marginTop: 60 }]}>
            <MaterialIcons
              name="alternate-email"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
              style={{ marginRight: 20 }}
            />
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={[
                LoginStyles.input,
                darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
              ]}
              placeholder="Email"
              placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
            />
          </View>
          <View style={[LoginStyles.inpuContainer]}>
            <AntDesign
              name="lock1"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
              style={{ marginRight: 20 }}
            />
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={[
                LoginStyles.input,
                darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
              ]}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
            />
          </View>
          <View
            style={[
              LoginStyles.otherTextContainer,
              { marginBottom: 60, marginLeft: 43.5, alignSelf: "flex-start" },
            ]}
          >
            <Text
              style={[
                LoginStyles.subTitle,
                { fontSize: 18, fontWeight: "500" },
                darkMode ? ThemeStyles.subTitleLight : ThemeStyles.subTitleDark,
              ]}
            >
              Forgot password?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResetPassword");
              }}
            >
              <Text
                style={[
                  LoginStyles.subTitle,
                  {
                    textDecorationLine: "underline",
                    fontSize: 18,
                  },
                  darkMode ? { color: "#0029FF" } : { color: "#7E93FF" },
                ]}
              >
                Click here
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={loading}
            style={[
              LoginStyles.button,
              darkMode ? ThemeStyles.buttonLight : ThemeStyles.buttonDark,
            ]}
            onPress={async () => {
              try {
                if (email === "" || password === "") {
                  alert("Please fill in all fields");
                  return;
                }

                setLoading(true);
                const response = await axios.post(
                  "https://whadoonotes-rest-api-production.up.railway.app/api/auth",
                  {
                    email,
                    password,
                  }
                );
                // console.log(response);

                if (response.status == 200) {
                  alert("Login Successful");
                  dispatch(login(response.data));
                  navigation.navigate("Home");
                } else {
                  alert(res.data.message);
                }
                setLoading(false);
              } catch (error) {
                console.log(error);
                if (error.response.status == 402) {
                  alert(error.response.data.message);
                  navigation.navigate("Verify");
                } else {
                  alert(error.response.data.message);
                }
                setLoading(false);
              }
            }}
          >
            <Text
              style={[
                LoginStyles.subTitle,
                darkMode ? { color: "#fff" } : { color: "#4B4B4B" },
              ]}
            >
              {loading ? "Loading..." : "Sign In"}
            </Text>
          </TouchableOpacity>

          <View style={LoginStyles.otherTextContainer}>
            <Text
              style={[
                LoginStyles.subTitle,
                { fontSize: 18, fontWeight: "500" },
                darkMode ? ThemeStyles.subTitleLight : ThemeStyles.subTitleDark,
              ]}
            >
              New to Logistics?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text
                style={[
                  LoginStyles.subTitle,
                  {
                    textDecorationLine: "underline",
                    fontSize: 18,
                  },
                  darkMode ? { color: "#0029FF" } : { color: "#7E93FF" },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
