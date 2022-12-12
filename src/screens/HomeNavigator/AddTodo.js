import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const AddTodo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="arrow-back" size={24} color="#676767" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: 80 }]}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              textAlign: "center",
              color: "#676767",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Untitled" style={styles.titleInput} />
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Type something..."
          style={styles.input}
          multiline={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
  },
  titleInput: {
    height: 50,
    fontSize: 24,
    fontWeight: "700",
    color: "#676767",
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#F2F2F2",
  },
  input: {
    fontSize: 18,
    fontWeight: "500",
    color: "#676767",
    marginTop: 20,
  },
});
