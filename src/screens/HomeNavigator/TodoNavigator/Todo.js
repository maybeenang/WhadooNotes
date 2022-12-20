import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from "react-native";

import Modal from "react-native-modal";

import { MasonryFlashList } from "@shopify/flash-list";

import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";

import { useNavigation } from "@react-navigation/native";

// import redux
import { useSelector, useDispatch } from "react-redux";
import { getNote, addNote } from "../../../redux/features/notesSlice";
import { getTodo, addTodo } from "../../../redux/features/todoSlice";
import axios from "axios";

// import style
import { TodoStyles } from "../../../styles/HomeStyles/TodoStyles";
import { ThemeStyles } from "../../../styles/ThemeStyles";

const Todo = () => {
  let x = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { darkMode } = useSelector((state) => state.darkMode);
  const { user } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.notes);
  const { todo } = useSelector((state) => state.todo);

  const [currentMenu, setCurrentMenu] = useState("Notes");
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [visibleModalTodo, setVisibleModalTodo] = useState(false);
  const [modalTodo, setModalTodo] = useState(false);
  const [selectTodo, setSelectTodo] = useState(null);
  const [tempTodoText, setTempTodoText] = useState("");
  const [selectNote, setSelectNote] = useState(null);

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
    if (item.isDeleted) {
      return;
    } else {
      return (
        <TouchableOpacity
          style={TodoStyles.itemContainer}
          onPress={() => {
            navigation.navigate("TodoStack", {
              screen: "EditTodo",
              params: {
                oldTitle: item.title,
                oldContent: item.description,
                userId: user.userId,
                noteId: item._id,
              },
            });
          }}
        >
          <View style={TodoStyles.itemTitleContainer}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#676767" }}>
              {item.title}
            </Text>
            <View style={TodoStyles.buttonContainer}>
              {/* <TouchableOpacity>
              <Entypo name="pin" size={16} color="#676767" />
            </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => {
                  setVisibleModalTodo(true);
                  setSelectNote({
                    userId: user.userId,
                    id: item._id,
                  });
                }}
              >
                <Entypo name="dots-three-vertical" size={16} color="#676767" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={TodoStyles.descriptionContainer}>
            <Text style={{ fontSize: 18 }}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  const renderTodo = ({ item }) => {
    if (item.isDeleted) {
      return;
    } else {
      return (
        <TouchableOpacity
          onPress={async () => {
            try {
              setLoading(true);
              const response = await axios.put(
                `http://192.168.1.10:3000/api/todos`,
                {
                  userId: user.userId,
                  id: item._id,
                  isCompleted: !item.isCompleted,
                }
              );

              dispatch(addTodo(response.data));
              setLoading(false);
            } catch (error) {
              setLoading(false);
              alert("Something went wrong, please try again later");
            }
          }}
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
            {!item.isCompleted ? (
              <MaterialIcons
                name="radio-button-off"
                size={24}
                color="#676767"
              />
            ) : (
              <MaterialIcons name="radio-button-on" size={24} color="#676767" />
            )}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                marginLeft: 10,
                color: item.isCompleted ? "black" : "#676767",
                textDecorationLine: item.isCompleted
                  ? "underline line-through"
                  : "none",
              }}
            >
              {item.label}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalTodo(true);
              setSelectTodo({
                userId: user.userId,
                id: item._id,
              });
            }}
          >
            <Entypo name="dots-three-vertical" size={16} color="#676767" />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
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
            {user?.name.split(" ")[0].charAt(0).toUpperCase() +
              user?.name.split(" ")[0].slice(1)}
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
          onPress={() => {
            alert(
              "WhadooNotes Inc.\nVersion 1.0.0\n© 2022\n\nAndre Riantasa Wijaya\n@henhen02 (Hendri)\nDaffa Sandri Ramadhan\nBagus Ardin Saputra\n@maybeenang (Elang)"
            );
          }}
        >
          <AntDesign
            name="infocirlce"
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

      <View
        style={[
          TodoStyles.labelScreen,
          {
            // backgroundColor: "red",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
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
        <TouchableOpacity
          onPress={() => {
            currentMenu == "Notes"
              ? navigation.navigate("TodoStack", { screen: "AddTodo" })
              : setModalVisible(true);
          }}
          style={[
            TodoStyles.button,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
        >
          <AntDesign
            name="plus"
            size={24}
            color={darkMode ? "#787878" : "#D4D4D4"}
          />
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
          {!notes ? (
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
              data={notes?.note}
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
          {!todo || todo == undefined ? (
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
              data={todo?.todo}
              renderItem={renderTodo}
              keyExtractor={(item) => item._id}
              estimatedItemSize={100}
            />
          )}
        </View>
      </Animated.ScrollView>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        backdropColor={darkMode ? "#1E1E1E" : "#F2F2F2"}
        backdropOpacity={0.8}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={1000}
        backdropTransitionInTiming={500}
        useNativeDriverForBackdrop={true}
        backdropTransitionOutTiming={800}
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View
          style={{
            backgroundColor: darkMode ? "#1E1E1E" : "#F2F2F2",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: darkMode ? "#D4D4D4" : "#1E1E1E",
              textAlign: "center",
            }}
          >
            Add Todo
          </Text>
          <TextInput
            value={tempTodoText}
            onChangeText={(text) => setTempTodoText(text)}
            style={{
              backgroundColor: darkMode ? "#2C2C2C" : "#E5E5E5",
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
              color: darkMode ? "#D4D4D4" : "#1E1E1E",
              fontSize: 16,
            }}
            placeholder="Title"
            placeholderTextColor={darkMode ? "#a2a2a2" : "#1E1E1E"}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                backgroundColor: darkMode ? "#2C2C2C" : "#E5E5E5",
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                color: darkMode ? "#D4D4D4" : "#1E1E1E",
                fontSize: 16,
                width: "45%",
              }}
            >
              <Text
                style={{
                  color: "#FB0400",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={loading}
              onPress={async () => {
                try {
                  setLoading(true);
                  const res = await axios.post(
                    "http://192.168.1.10:3000/api/todos",
                    {
                      userId: user.userId,
                      label: tempTodoText,
                    }
                  );

                  dispatch(addTodo(res.data));
                  setTempTodoText("");
                  setLoading(false);
                  setModalVisible(false);
                } catch (error) {
                  console.log(error);
                  setLoading(false);
                }
                // console.log(user);
              }}
              style={{
                backgroundColor: darkMode ? "#2C2C2C" : "#E5E5E5",
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                color: darkMode ? "#D4D4D4" : "#1E1E1E",
                fontSize: 16,
                width: "45%",
              }}
            >
              <Text
                style={{
                  color: "#007AFF",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                {loading ? "Loading..." : "Done"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={visibleModalTodo}
        onBackdropPress={() => setVisibleModalTodo(false)}
        onBackButtonPress={() => setVisibleModalTodo(false)}
        backdropColor={darkMode ? "#1E1E1E" : "#F2F2F2"}
        backdropOpacity={0.8}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={1000}
        backdropTransitionInTiming={500}
        useNativeDriverForBackdrop={true}
        backdropTransitionOutTiming={800}
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View
          style={{
            backgroundColor: darkMode ? "#1E1E1E" : "#F2F2F2",
            // backgroundColor: "red",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: darkMode ? "#D4D4D4" : "#1E1E1E",
              textAlign: "center",
              borderBottomColor: darkMode ? "#2C2C2C" : "#E5E5E5",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
          >
            Options
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              alert("Coming Soon!");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: darkMode ? "#D4D4D4" : "#1E1E1E",
              }}
            >
              Pin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              alert("Coming Soon!");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: darkMode ? "#D4D4D4" : "#1E1E1E",
              }}
            >
              Archive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              try {
                setLoading(true);

                const res = await axios.put(
                  "http://192.168.1.10:3000/api/notes",
                  {
                    noteId: selectNote.id,
                    userId: user.userId,
                    isDeleted: true,
                  }
                );

                dispatch(addNote(res.data));
                setVisibleModalTodo(false);
                setLoading(false);
              } catch (error) {
                console.log(error);
                alert("Something went wrong");
                setLoading(false);
              }
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: darkMode ? "#ff7270" : "#ff0400",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        isVisible={modalTodo}
        onBackdropPress={() => setModalTodo(false)}
        onBackButtonPress={() => setModalTodo(false)}
        backdropColor={darkMode ? "#1E1E1E" : "#F2F2F2"}
        backdropOpacity={0.8}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={1000}
        backdropTransitionInTiming={500}
        useNativeDriverForBackdrop={true}
        backdropTransitionOutTiming={800}
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View
          style={{
            backgroundColor: darkMode ? "#1E1E1E" : "#F2F2F2",
            // backgroundColor: "red",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: darkMode ? "#D4D4D4" : "#1E1E1E",
              textAlign: "center",
              borderBottomColor: darkMode ? "#2C2C2C" : "#E5E5E5",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
          >
            Edit Todo
          </Text>
          <TouchableOpacity
            onPress={async () => {
              try {
                setLoading(true);

                const res = await axios.put(
                  "http://192.168.1.10:3000/api/todos",
                  {
                    id: selectTodo.id,
                    userId: user.userId,
                    isDeleted: true,
                  }
                );
                console.log("sada");
                dispatch(addTodo(res.data));
                setModalTodo(false);
                setLoading(false);
              } catch (error) {
                console.log(error);
                alert("Something went wrong");
                setLoading(false);
              }
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: darkMode ? "#ff7270" : "#ff0400",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Todo;
