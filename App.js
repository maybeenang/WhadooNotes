import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Inter-Black": require("./assets/font/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/font/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/font/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/font/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/font/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/font/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/font/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/font/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/font/Inter-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
