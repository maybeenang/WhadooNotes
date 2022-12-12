import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from "react-native";

import { MasonryFlashList } from "@shopify/flash-list";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";

const Todo = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.itemTitleContainer}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "#676767" }}>
            {item.title}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Entypo name="pin" size={16} color="#676767" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={16} color="#676767" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ fontSize: 18, textAlign: "justify" }}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  let todoData = [
    {
      id: 1,
      title: "Buy Milk",
      description: "Buy 2L Milk ",
      pinned: true,
    },
    {
      id: 2,
      title: "Buy Bread",
      description: "Buy 2 Loaves of dnsajdaks dsa djas dakd kad akjdslad ak",
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

  const x = useRef(new Animated.Value(0)).current;
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
          <Text style={[styles.labelText, styles.labelActive]}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.labelButton}>
          <Text style={styles.labelText}>Todo</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.scrollIndicator,
          {
            transform: [
              {
                translateX: x.interpolate({
                  inputRange: [0, Dimensions.get("window").width - 30],
                  outputRange: [
                    0,
                    Dimensions.get("window").width -
                      Dimensions.get("window").width +
                      36 * 2,
                  ],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      />
      <Animated.ScrollView
        style={styles.scrollHorizontal}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
          useNativeDriver: true,
        })}
      >
        <View
          style={{
            width: Dimensions.get("window").width - 30,
            paddingHorizontal: 10,
          }}
        >
          <MasonryFlashList
            data={todoData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            estimatedItemSize={100}
          />
        </View>

        <View
          style={{
            width: Dimensions.get("window").width - 30,
            marginStart: -10,
            paddingHorizontal: 5,
          }}
        >
          <MasonryFlashList
            data={todoData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            estimatedItemSize={100}
          />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 10,
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
    flexDirection: "row",
  },
  labelScreen: {
    flexDirection: "row",
    marginTop: 10,
  },
  labelButton: {
    padding: 10,
    marginEnd: 10,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#9F9F9F",
  },
  labelActive: {
    // borderBottomWidth: 2,
    // color: "black",
    // fontWeight: "900",
  },
  itemContainer: {
    backgroundColor: "#CEF1F5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "95%",
  },
  itemTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    marginTop: 10,
    // backgroundColor: "#fff",
    width: "90%",
  },
  scrollIndicator: {
    height: 4,
    width: 50,
    marginTop: -5,
    backgroundColor: "#676767",
    borderRadius: 5,
    marginLeft: 7,
  },
});
