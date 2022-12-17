import { AntDesign } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Todo from "./HomeNavigator/Todo";
import Settings from "./HomeNavigator/Settings";
import AddTodo from "./HomeNavigator/AddTodo";

// import redux
import { useSelector } from "react-redux";

const Home = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Todo") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "setting" : "setting";
          } else if (route.name === "AddTodo") {
            iconName = focused ? "pluscircleo" : "pluscircleo";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: darkMode ? "black" : "white",
        tabBarInactiveTintColor: "#9F9F9F",
        tabBarStyle: {
          backgroundColor: `${darkMode ? "#fff" : "#4B4B4B"}`,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Todo" component={Todo} />
      <Tab.Screen name="AddTodo" component={AddTodo} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
