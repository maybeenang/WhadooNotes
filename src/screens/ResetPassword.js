import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import ResetPw from "../assets/flatImage/ResetPw.svg";

// import redux
import { useSelector } from "react-redux";

// import styles
import { ResetPasswordStyles } from "../styles/ResetPasswordStyles";
import { ThemeStyles } from "../styles/ThemeStyles";

const ResetPassword = ({ navigation }) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <SafeAreaView
      style={[
        ResetPasswordStyles.container,
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <TouchableOpacity
        style={ResetPasswordStyles.toggle}
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
      <ResetPw width={300} height={300} style={ResetPasswordStyles.flatImage} />
      <Text
        style={[
          ResetPasswordStyles.title,
          darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
        ]}
      >
        Confirm{"\n"}New Password
      </Text>
      <View style={{ marginTop: 40 }}>
        <Text
          style={[
            { marginLeft: 42 },
            darkMode ? ThemeStyles.subTitleLight : ThemeStyles.titleDark,
          ]}
        >
          Enter New Password
        </Text>
        <View style={ResetPasswordStyles.inpuContainer}>
          <AntDesign
            name="lock1"
            size={24}
            color={darkMode ? "#292929" : "#fff"}
            style={{ marginRight: 20 }}
          />
          <TextInput
            style={[
              ResetPasswordStyles.input,
              darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
            ]}
            placeholder="Password"
            placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
          />
        </View>
      </View>
      <View>
        <Text
          style={[
            { marginLeft: 42 },
            darkMode ? ThemeStyles.subTitleLight : ThemeStyles.titleDark,
          ]}
        >
          Re-Enter New Password
        </Text>
        <View style={[ResetPasswordStyles.inpuContainer]}>
          <AntDesign
            name="unlock"
            size={24}
            color={darkMode ? "#292929" : "#fff"}
            style={{ marginRight: 20 }}
          />
          <TextInput
            style={[
              ResetPasswordStyles.input,
              darkMode ? ThemeStyles.inputLight : ThemeStyles.inputDark,
            ]}
            placeholder="Re-Enter Password"
            placeholderTextColor={darkMode ? "#D4D4D4" : "#A5A5A5"}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          ResetPasswordStyles.button,
          darkMode ? ThemeStyles.buttonLight : ThemeStyles.buttonDark,
        ]}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text
          style={[
            ResetPasswordStyles.subTitle,
            darkMode ? { color: "#fff" } : { color: "#4B4B4B" },
          ]}
        >
          Confirm
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPassword;
