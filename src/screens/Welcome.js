import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import WelcomeSvg from "../assets/flatImage/WelcomeSvg.svg";
import { SafeAreaView } from "react-native-safe-area-context";

// import redux
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/features/darkModeSlice";

const Welcome = ({ navigation }) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => {
          dispatch(toggleDarkMode());
          console.log(darkMode);
        }}
      >
        <Ionicons name="moon" size={24} color="#292929" />
      </TouchableOpacity>
      <WelcomeSvg width={300} height={300} style={styles.flatImage} />
      <Text style={styles.title}>WhadooNotes </Text>
      <View style={[{ width: "70%" }]}>
        <Text style={styles.subTitle}>Create notes anywhere and everytime</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={[styles.subTitle, { color: "#fff" }]}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.otherTextContainer}>
        <Text style={[styles.subTitle, { fontSize: 18, fontWeight: "500" }]}>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
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
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  toggle: {
    alignSelf: "flex-end",
  },
  flatImage: {
    marginTop: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#4B4B4B",
    textAlign: "center",
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
    marginTop: "40%",
    marginBottom: 20,
  },
  otherTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
