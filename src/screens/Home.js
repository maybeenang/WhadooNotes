import { AntDesign } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TodoStack from "./HomeNavigator/TodoStack";
import Settings from "./HomeNavigator/Settings";

const Tab = createBottomTabNavigator();

// import redux
import { useSelector } from "react-redux";

const Home = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "TodoStack") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "setting" : "setting";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: darkMode ? "black" : "white",
        tabBarInactiveTintColor: "#9F9F9F",
        tabBarStyle: {
          backgroundColor: `${darkMode ? "#fff" : "#4B4B4B"}`,
          borderTopWidth: 0,
          elevation: 0,
          display: route.name === "AddTodo" ? "none" : "flex",
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="TodoStack" component={TodoStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
