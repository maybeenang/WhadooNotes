import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  
  import { SafeAreaView } from "react-native-safe-area-context";
  import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
  import ResetPw from "../assets/flatImage/ResetPw.svg";
  
  const ResetPassword = ({ navigation }) => {
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
        <ResetPw width={300} height={300} style={styles.flatImage} />
        <Text style={styles.title}>Confirm{"\n"}New Password</Text>
        <View style={{marginTop: 40}}>
            <Text style={{marginLeft: 42}}>Enter New Password</Text>
            <View style={styles.inpuContainer}>
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
        </View>
        <View>
            <Text style={{marginLeft: 42}}>Re-Enter New Password</Text>
            <View style={[styles.inpuContainer]}>
                <AntDesign
                    name="unlock"
                    size={24}
                    color="#292929"
                    style={{ marginRight: 20 }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Re-Enter Password"
                    placeholderTextColor="#D4D4D4"
                />
            </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={[styles.subTitle, { color: "#fff" }]}>Confirm</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default ResetPassword;
  
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
      marginTop: 60,
      marginBottom: 10,
    }
  });
  