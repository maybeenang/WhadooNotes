import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Otp from "../assets/flatImage/Otp.svg";
import { useState } from "react";

// import redux
import { useSelector, useDispatch } from "react-redux";
import { verify } from "../redux/features/authSlice";
import axios from "axios";

// import styles
import { VerifyStyles } from "../styles/VerifyStyles";
import { ThemeStyles } from "../styles/ThemeStyles";

const Verify = ({ navigation }) => {
  const [kode, setKode] = useState("");
  const { darkMode } = useSelector((state) => state.darkMode);
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      style={[
        VerifyStyles.container,
        { padding: 0 },
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView
          style={[
            VerifyStyles.container,
            darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
          ]}
        >
          <TouchableOpacity
            style={VerifyStyles.toggle}
            onPress={() => {
              navigation.goBack();
            }}
          >
            {/* <Ionicons
              name="arrow-back"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
            /> */}
          </TouchableOpacity>
          <Otp width={300} height={300} style={VerifyStyles.flatImage} />
          <Text
            style={[
              VerifyStyles.subTitle,
              darkMode ? ThemeStyles.subTitleLight : ThemeStyles.subTitleDark,
            ]}
          >
            Please check your email, we have send otp code to{" "}
            <Text style={{ color: "#FF5C00" }}>{user.email}</Text>
          </Text>
          <View
            style={[
              VerifyStyles.inpuContainer,
              { marginTop: 60, marginBottom: 60 },
            ]}
          >
            <AntDesign
              name="key"
              size={24}
              color={darkMode ? "#292929" : "#fff"}
              style={{ marginRight: 20 }}
            />
            <TextInput
              style={[
                VerifyStyles.input,
                darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
              ]}
              placeholder="Enter OTP"
              placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
              onChangeText={(text) => setKode(text)}
              value={kode}
            />
          </View>
          <TouchableOpacity
            disabled={loading}
            style={[
              VerifyStyles.button,
              darkMode ? ThemeStyles.buttonLight : ThemeStyles.buttonDark,
            ]}
            onPress={async () => {
              try {
                if (kode.length === 0) {
                  alert("Please enter the code");
                  return;
                }

                setLoading(true);
                const response = await axios.get(
                  `https://whadoonotes-rest-api-production.up.railway.app/api/users/${user.userId}/verify/${kode}`
                );

                if (response.status == 200) {
                  dispatch(verify(user));
                  navigation.navigate("Login");
                } else {
                  alert("Wrong code");
                }
                setLoading(false);
              } catch (error) {
                setLoading(false);
                alert(error.response.data.message);
              }
            }}
          >
            <Text
              style={[
                VerifyStyles.subTitle,
                darkMode ? { color: "#fff" } : { color: "#4B4B4B" },
              ]}
            >
              {loading ? "Loading..." : "Verify"}
            </Text>
          </TouchableOpacity>
          <View style={VerifyStyles.otherTextContainer}>
            <Text
              style={[
                VerifyStyles.subTitle,
                { fontSize: 18, fontWeight: "500" },
                darkMode ? ThemeStyles.subTitleLight : ThemeStyles.subTitleDark,
              ]}
            >
              Not Receive the code?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Verify");
              }}
            >
              <Text
                style={[
                  VerifyStyles.subTitle,
                  {
                    textDecorationLine: "underline",
                    fontSize: 18,
                  },
                  darkMode ? { color: "#0029FF" } : { color: "#7E93FF" },
                ]}
              >
                Resend Code
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Verify;
