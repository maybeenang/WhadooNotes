import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

// import redux
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../../redux/features/notesSlice";
import axios from "axios";

// import AddTodoStyles
import { AddTodoStyles } from "../../../styles/HomeStyles/AddTodoStyles";
import { ThemeStyles } from "../../../styles/ThemeStyles";

const AddTodo = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const { user } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.notes);
  const [title, setTitle] = useState("Untitled");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log(notes);
  // }, [notes,]);

  return (
    <SafeAreaView
      style={[
        AddTodoStyles.container,
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <View style={AddTodoStyles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={[
            AddTodoStyles.button,
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={darkMode ? "#787878" : "#D4D4D4"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={loading}
          style={[
            AddTodoStyles.button,
            { width: 80 },
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
          onPress={async () => {
            try {
              title === "" ? setTitle("Untitled") : setTitle(title);
              if (content === "") {
                navigation.goBack();
                return;
              }

              setLoading(true);

              const res = await axios.post(
                "http://192.168.1.10:3000/api/notes",
                {
                  userId: user.userId,
                  title: title,
                  description: content,
                }
              );

              dispatch(addNote(res.data));
              setLoading(false);
              navigation.goBack();
              setTitle("Untitled");
              setContent("");
            } catch (error) {
              console.log(error);
              setLoading(false);
            }
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              textAlign: "center",
              color: darkMode ? "#787878" : "#D4D4D4",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Untitled"
        placeholderTextColor={darkMode ? "#787878" : "#D4D4D4"}
        style={[
          AddTodoStyles.titleInput,
          darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
        ]}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Type something..."
          placeholderTextColor={darkMode ? "#787878" : "#D4D4D4"}
          style={[
            AddTodoStyles.input,
            darkMode ? ThemeStyles.titleLight : ThemeStyles.titleDark,
          ]}
          multiline={true}
          onChangeText={(text) => setContent(text)}
          value={content}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
