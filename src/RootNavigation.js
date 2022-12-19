// import core modules
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

// import screens
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Verify from "./screens/Verify";
import ResetPassword from "./screens/ResetPassword";

// import navigation
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

// import redux
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style={darkMode ? "dark" : "light"} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: true,
          }}
          initialRouteName={loggedIn ? "Home" : "Welcome"}
        >
          {loggedIn ? (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Verify" component={Verify} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
