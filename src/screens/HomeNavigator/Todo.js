import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MasonryFlashList } from "@shopify/flash-list";

import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";

// import redux
import { useSelector, useDispatch } from "react-redux";
import { getNote, addNote } from "../../redux/features/notesSlice";
import { getTodo, addTodo } from "../../redux/features/todoSlice";
import axios from "axios";

// import style
import { TodoStyles } from "../../styles/HomeStyles/TodoStyles";
import { ThemeStyles } from "../../styles/ThemeStyles";

const Todo = () => {
  const [currentMenu, setCurrentMenu] = useState("Notes");
  let x = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.darkMode);
  const { user } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.notes);
  const { todo } = useSelector((state) => state.todo);
  const [loading, setLoading] = useState(false);

  const getData = async (type) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://192.168.1.10:3000/api/${type}/${user.userId}`
      );
      type === "notes"
        ? dispatch(getNote(response.data))
        : dispatch(getTodo(response.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong, please try again later");
    }
  };

  useEffect(() => {
    getData("notes");
    getData("todos");
  }, []);

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

  const renderTodo = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          TodoStyles.itemContainer,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="radio-button-off" size={24} color="#676767" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 10,
              color: "#676767",
            }}
          >
            {item.label}
          </Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={16} color="#676767" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

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
            Hi,{" "}
            {user.name.split(" ")[0].charAt(0).toUpperCase() +
              user.name.split(" ")[0].slice(1)}
          </Text>
          <Text
            style={[
              TodoStyles.headerTitle,
              darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
            ]}
          >
            Good{" "}
            {new Date().getHours() < 12
              ? "Morning"
              : new Date().getHours() < 17
              ? "Afternoon"
              : new Date().getHours() < 20
              ? "Evening"
              : "Night"}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            TodoStyles.button,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
          // onPress={() => {
          //   getData().then((data) => {
          //     console.log(data);
          //   });
          // }}
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
        <TouchableOpacity
          style={TodoStyles.labelButton}
          onPress={() => {
            scrollRef.current.scrollTo({ x: 0, y: 0 });
          }}
        >
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
        <TouchableOpacity
          style={TodoStyles.labelButton}
          onPress={() => {
            // setCurrentMenu("Todo");
            scrollRef.current.scrollTo({
              x: Dimensions.get("window").width - 40,
              y: 0,
            });
          }}
        >
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
        ref={scrollRef}
      >
        <View
          style={{
            width: Dimensions.get("window").width - 30,
            paddingHorizontal: 10,
          }}
        >
          {notes.note.length === 0 ? (
            <Text
              style={[
                { textAlign: "center", marginTop: 20 },
                darkMode
                  ? {
                      color: "#C0C0C0",
                    }
                  : { color: "#D4D4D4" },
              ]}
            >
              You don't have any notes. {"\n"} Click on the + button to add a
              note.
            </Text>
          ) : (
            <MasonryFlashList
              data={notes.note}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              numColumns={2}
              estimatedItemSize={100}
            />
          )}
        </View>

        <View
          style={{
            width: Dimensions.get("window").width - 30,
            marginStart: -10,
            paddingHorizontal: 5,
          }}
        >
          {todo.todo.length === 0 ? (
            <Text
              style={[
                { textAlign: "center", marginTop: 20, marginStart: 5 },
                darkMode
                  ? {
                      color: "#C0C0C0",
                    }
                  : { color: "#D4D4D4" },
              ]}
            >
              You don't have any todo.{"\n"} Click on the + button to add a
              todo.
            </Text>
          ) : (
            <MasonryFlashList
              data={todoData}
              renderItem={renderTodo}
              keyExtractor={(item) => item.id}
              estimatedItemSize={100}
            />
          )}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Todo;
