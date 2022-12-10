import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import SignIn from "../assets/flatImage/SignIn.svg";

const Login = ({ navigation }) => {
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
      <SignIn width={300} height={300} style={styles.flatImage} />
      <Text style={styles.title}>Sign In</Text>
      <View style={[styles.inpuContainer, { marginTop: 60 }]}>
        <MaterialIcons
          name="alternate-email"
          size={24}
          color="#292929"
          style={{ marginRight: 20 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <View style={[styles.inpuContainer]}>
        <AntDesign
          name="lock1"
          size={24}
          color="#292929"
          style={{ marginRight: 20 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#D4D4D4"
        />
      </View>
      <View
        style={[
          styles.otherTextContainer,
          { marginBottom: 60, marginLeft: 43.5, alignSelf: "flex-start" },
        ]}
      >
        <Text style={[styles.subTitle, { fontSize: 18, fontWeight: "500" }]}>
          Forgot password?{" "}
        </Text>
        <TouchableOpacity>
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
            Click here
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.subTitle, { color: "#fff" }]}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.otherTextContainer}>
        <Text style={[styles.subTitle, { fontSize: 18, fontWeight: "500" }]}>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity>
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
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
  title: {
    fontSize: 45,
    fontWeight: "900",
    alignSelf: "flex-start",
    color: "#4B4B4B",
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
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#a9a9a9",
    textAlign: "center",
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
