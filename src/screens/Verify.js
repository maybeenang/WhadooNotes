import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Otp from "../assets/flatImage/Otp.svg";

const Verify = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#4B4B4B" />
      </TouchableOpacity>
      <Otp width={300} height={300} style={styles.flatImage} />
      <Text style={styles.subTitle}>
        Please check your email, we have send otp code to{" "}
        <Text style={{ color: "#FF5C00" }}>user@gmail.com</Text>
      </Text>
      <View style={[styles.inpuContainer, { marginTop: 60, marginBottom: 60 }]}>
        <AntDesign
          name="key"
          size={24}
          color="#292929"
          style={{ marginRight: 20 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={[styles.subTitle, { color: "#FFF" }]}>Verify</Text>
      </TouchableOpacity>
      <View style={styles.otherTextContainer}>
        <Text style={[styles.subTitle, { fontSize: 18, fontWeight: "500" }]}>
          Not Receive the code?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Verify");
          }}
        >
          <Text
            style={[
              styles.subTitle,
              {
                color: "#0029FF",
                textDecorationLine: "underline",
                fontSize: 18,
              },
            ]}
          >
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Verify;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  toggle: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  flatImage: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#a9a9a9",
    textAlign: "center",
  },
  inpuContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#4B4B4B",
    fontSize: 18,
    width: "80%",
    fontWeight: "500",
    color: "#4B4B4B",
  },
  button: {
    backgroundColor: "#292929",
    width: "80%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  otherTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
