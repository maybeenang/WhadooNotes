import { AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Todo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>Hi, User</Text>
          <Text style={styles.headerTitle}>Good Morning</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="user" size={24} color="#676767" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={24}
          color="#676767"
          style={{ marginRight: 20 }}
        />
        <TextInput placeholder="Search" style={{ flex: 1 }} />
      </View>

      <View style={styles.labelScreen}>
        <TouchableOpacity style={styles.labelButton}>
          <Text>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.labelButton}>
          <Text>Todo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollHorizontal}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#676767",
  },
  button: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
  },
  searchContainer: {
    backgroundColor: "#EEEEEE",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  scrollHorizontal: {
    marginTop: 20,
    backgroundColor: "red",
  },
  labelScreen: {
    flexDirection: "row",
    backgroundColor: "pink",
  },
  labelButton: {
    backgroundColor: "yellow",
    padding: 10,
    marginEnd: 10,
  },
});
