import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import Todo from "./TodoNavigator/Todo";
import AddTodo from "./TodoNavigator/AddTodo";
import EditTodo from "./TodoNavigator/EditTodo";

const TodoNav = createStackNavigator();

const TodoStack = () => {
  return (
    <TodoNav.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
      }}
      initialRouteName="Todo"
    >
      <TodoNav.Screen name="Todo" component={Todo} />
      <TodoNav.Screen name="AddTodo" component={AddTodo} />
      <TodoNav.Screen name="EditTodo" component={EditTodo} />
    </TodoNav.Navigator>
  );
};

export default TodoStack;
