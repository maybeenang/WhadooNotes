import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// import redux
import { useSelector } from "react-redux";

// import AddTodoStyles
import { AddTodoStyles } from "../../styles/HomeStyles/AddTodoStyles";
import { ThemeStyles } from "../../styles/ThemeStyles";

const AddTodo = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <SafeAreaView
      style={[
        AddTodoStyles.container,
        darkMode ? ThemeStyles.containerLight : ThemeStyles.containerDark,
      ]}
    >
      <View style={AddTodoStyles.header}>
        <TouchableOpacity
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
          style={[
            AddTodoStyles.button,
            { width: 80 },
            darkMode ? ThemeStyles.buttonTodoLight : ThemeStyles.buttonTodoDark,
          ]}
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
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
