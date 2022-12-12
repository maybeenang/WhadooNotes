import { AntDesign } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Todo from "./HomeNavigator/Todo";
import Settings from "./HomeNavigator/Settings";
import AddTodo from "./HomeNavigator/AddTodo";

const Home = () => {
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
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#D8D8D8",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 2,
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
