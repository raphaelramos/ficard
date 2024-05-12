import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";

import CardsScreen from "./CardsScreen";
import EditProfileScreen from "./EditProfileScreen";
import SettingsScreen from "./SettingsScreen";
import StatsScreen from "./StatsScreen";
import { useTabBarVisibility } from "./TabBarVisibilityContext";
import UserScreen from "./UserScreen";
import HomeButton from "../assets/cardsScreen/HomeButton";
import SettingButton from "../assets/cardsScreen/SettingButton";
import StatisticsButton from "../assets/cardsScreen/StatisticsButton";
import UserButton from "../assets/cardsScreen/UserButton";

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const figmaWidth = 375;
const figmaHeight = 812;

const UserStack = createNativeStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="UserScreen" component={UserScreen} />
      <UserStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
    </UserStack.Navigator>
  );
}
const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute", // Absolute positioning
    bottom: 0, // Align to the bottom of the screen
    width: screenWidth, // Full width of the screen
    height: 88 * (screenHeight / figmaHeight), // Fixed height as specified
    backgroundColor: "#151515", // Updated background color
    borderTopLeftRadius: 50, // 50px radius for top left corner
    borderTopRightRadius: 50,
    // Additional styling as needed
  },
  menuSelector: {
    position: "absolute",
    top: 18 * (screenHeight / figmaHeight),
    left: 12 * (screenWidth / figmaWidth),
    width: 84 * (screenWidth / figmaWidth),
    height: 48 * (screenHeight / figmaHeight),
    paddingHorizontal: 30 * (screenWidth / figmaWidth),
    paddingVertical: 12 * (screenHeight / figmaHeight),
    borderRadius: 50,
    backgroundColor: "#E8772E",
    shadowColor: "#E5F240",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  homeButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight),
    left: 54 * (screenWidth / figmaWidth),
    width: 20 * (screenWidth / figmaWidth),
    height: 18 * (screenHeight / figmaHeight),
  },
  staticsButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight),
    left: 135 * (screenWidth / figmaWidth),
    width: 24 * (screenWidth / figmaWidth),
    height: 24 * (screenHeight / figmaHeight),
  },
  userButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight),
    left: 216 * (screenWidth / figmaWidth),
    width: 24,
    height: 24,
  },
  settingButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight),
    left: 297 * (screenWidth / figmaWidth),
    width: 24,
    height: 24,
  },
});

const menuItems = {
  Home: { component: HomeButton, style: styles.homeButton },
  Stats: { component: StatisticsButton, style: styles.staticsButton },
  User: { component: UserButton, style: styles.userButton }, // Assuming you have a UserButton component
  Settings: { component: SettingButton, style: styles.settingButton }, // Assuming you have a SettingsButton component
  // Add other menu items as needed
};

const initialLeft =
  menuItems.Home.style.left +
  menuItems.Home.style.width / 2 -
  styles.menuSelector.width / 2;

function MainTabs() {
  const selectorPosition = useRef(new Animated.Value(initialLeft)).current;
  const { isTabBarVisible } = useTabBarVisibility();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { display: isTabBarVisible ? "flex" : "none" },
      }}
      tabBar={
        ({ state, navigation }) =>
          isTabBarVisible ? ( // Use isTabBarVisible to conditionally render the tab bar
            <View style={styles.menuContainer}>
              <Animated.View
                style={[styles.menuSelector, { left: selectorPosition }]}
              >
                {/* If you want certain components to be part of the selector, include them here */}
              </Animated.View>
              {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const MenuItem = menuItems[route.name]?.component;
                const menuItemStyle = menuItems[route.name]?.style;

                return (
                  <TouchableOpacity
                    key={route.key}
                    onPress={() => {
                      navigation.navigate(route.name);
                      const iconCenter =
                        menuItemStyle.left + menuItemStyle.width / 2;
                      const selectorCenter = styles.menuSelector.width / 2;
                      const newLeft = iconCenter - selectorCenter;
                      Animated.spring(selectorPosition, {
                        toValue: newLeft,
                        useNativeDriver: false,
                      }).start();
                    }}
                    style={[menuItemStyle, { position: "absolute" }]}
                  >
                    <MenuItem fill={isFocused ? "#000000" : "#AEAEAE"} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null // If isTabBarVisible is false, the tab bar will not be rendered
      }
    >
      <Tab.Screen name="Home" component={CardsScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="User" component={UserStackScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
