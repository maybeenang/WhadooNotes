import { AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { FlashList } from "@shopify/flash-list";

import { SafeAreaView } from "react-native-safe-area-context";

const Todo = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.todoContainer}>
        <View style={styles.todoTitleContainer}>
          <Text style={styles.todoTitle}>{item.title}</Text>
          <Text style={styles.todoDescription}>{item.description}</Text>
        </View>
        <TouchableOpacity style={styles.todoButton}>
          <AntDesign name="right" size={24} color="#676767" />
        </TouchableOpacity>
      </View>
    );
  };

  let todoData = [
    {
      id: 1,
      title: "Buy Milk",
      description: "Buy 2L Milk",
      pinned: true,
    },
    {
      id: 2,
      title: "Buy Bread",
      description: "Buy 2 Loaves of Bread",
      pinned: false,
    },
    {
      id: 3,
      title: "Buy Eggs",
      description: "Buy 12 Eggs",
      pinned: false,
    },
    {
      id: 4,
      title: "Buy Milk",
      description: "Buy 2L Milk",
      pinned: true,
    },
    {
      id: 5,
      title: "Buy Bread",
      description: "Buy 2 Loaves of Bread",
      pinned: false,
    },
    {
      id: 6,
      title: "Buy Eggs",
      description: "Buy 12 Eggs",
      pinned: false,
    },
    {
      id: 7,
      title: "Buy Milk",
      description: "Buy 2L Milk",
      pinned: true,
    },
  ];

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
      <FlashList
        data={todoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        estimatedItemSize={100}
      />

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
    marginTop: 10,
    backgroundColor: "red",
  },
  labelScreen: {
    flexDirection: "row",
    backgroundColor: "pink",
    marginTop: 10,
  },
  labelButton: {
    backgroundColor: "yellow",
    padding: 10,
    marginEnd: 10,
  },
});
