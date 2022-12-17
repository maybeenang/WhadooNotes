import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from "react-native";

import { MasonryFlashList } from "@shopify/flash-list";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";

// import redux
import { useSelector } from "react-redux";

// import style
import { TodoStyles } from "../../styles/HomeStyles/TodoStyles";
import { ThemeStyles } from "../../styles/ThemeStyles";

const Todo = () => {
  const [currentMenu, setCurrentMenu] = useState("Notes");

  const { darkMode } = useSelector((state) => state.darkMode);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={TodoStyles.itemContainer}>
        <View style={TodoStyles.itemTitleContainer}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "#676767" }}>
            {item.title}
          </Text>
          <View style={TodoStyles.buttonContainer}>
            <TouchableOpacity>
              <Entypo name="pin" size={16} color="#676767" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={16} color="#676767" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={TodoStyles.descriptionContainer}>
          <Text style={{ fontSize: 18 }}>{item.description}</Text>
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
    <SafeAreaView
      style={[
        TodoStyles.container,
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <View style={TodoStyles.headerContainer}>
        <View>
          <Text
            style={[
              TodoStyles.headerTitle,
              darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
            ]}
          >
            Hi, User
          </Text>
          <Text
            style={[
              TodoStyles.headerTitle,
              darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
            ]}
          >
            Good Morning
          </Text>
        </View>
        <TouchableOpacity
          style={[
            TodoStyles.button,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
          onPress={() => {
            console.log(currentMenu);
          }}
        >
          <AntDesign
            name="user"
            size={24}
            color={darkMode ? "#787878" : "#D4D4D4"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          TodoStyles.searchContainer,
          darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
        ]}
      >
        <AntDesign
          name="search1"
          size={24}
          color={darkMode ? "#C0C0C0" : "#676767"}
          style={{ marginRight: 20 }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={darkMode ? "#C0C0C0" : "#676767"}
          style={[
            { flex: 1 },
            darkMode ? { color: "#C0C0C0" } : { color: "#676767" },
          ]}
        />
      </View>

      <View style={TodoStyles.labelScreen}>
        <TouchableOpacity style={TodoStyles.labelButton}>
          <Text
            style={[
              TodoStyles.labelText,
              currentMenu == "Notes"
                ? darkMode
                  ? TodoStyles.labelActive
                  : { color: "#D4D4D4" }
                : darkMode
                ? null
                : { color: "#797979" },
            ]}
          >
            Notes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={TodoStyles.labelButton}>
          <Text
            style={[
              TodoStyles.labelText,
              currentMenu == "Todo"
                ? darkMode
                  ? TodoStyles.labelActive
                  : { color: "#D4D4D4" }
                : darkMode
                ? null
                : { color: "#797979" },
            ]}
          >
            Todo
          </Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          TodoStyles.scrollIndicator,
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
          darkMode ? null : { backgroundColor: "#D4D4D4" },
        ]}
      />
      <Animated.ScrollView
        style={TodoStyles.scrollHorizontal}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
          useNativeDriver: true,
          listener: (event) => {
            setCurrentMenu(
              event.nativeEvent.contentOffset.x === 0 ? "Notes" : "Todo"
            );
          },
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
