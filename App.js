import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import React, { useEffect } from "react";

import LoginScreen from "./app/LoginScreen";
import MainTabs from "./app/MainTabs";
import PrivacyPolicy from "./app/PrivacyPolicy";
import SignUpScreen from "./app/SignUpScreen";
import { TabBarVisibilityProvider } from "./app/TabBarVisibilityContext";
import WelcomeScreen from "./app/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  async function loadFonts() {
    await Font.loadAsync({
      Urbanist: require("./assets/fonts/Urbanist.ttf"),
      "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
      "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    });
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <TabBarVisibilityProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Card" component={MainTabs} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabBarVisibilityProvider>
  );
}
