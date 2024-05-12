import * as Linking from "expo-linking";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";

import ArrowVector from "../assets/cardsScreen/ArrowVector";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const figmaWidth = 375;
const figmaHeight = 812;
const SettingScreen = ({ navigation }) => {
  const handlePrivacyPolicy = () => {
    navigation.navigate("PrivacyPolicy", "Privacy Policy");
  };
  const handleHelp = () => {
    Linking.openURL("https://google.com");
    console.log("Navigate to Help");
  };

  const [isToggled, setIsToggled] = useState(false);
  const toggleAnimation = useRef(new Animated.Value(0)).current;
  const toggleSwitch = () => {
    Animated.timing(toggleAnimation, {
      toValue: isToggled ? 0 : 1, // Animate to 1 if not toggled, back to 0 if toggled
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsToggled(!isToggled);
  };
  const circleTransform = toggleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      2 * (screenWidth / figmaWidth),
      22 * (screenWidth / figmaWidth),
    ],
  });
  return (
    <View style={styles.screen}>
      <View style={styles.topBar} />
      <Text style={styles.profileTitle}>Settings</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={handlePrivacyPolicy}>
          <Text style={styles.optionText}>Privacy Policy</Text>
          <ArrowVector style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleHelp}>
          <Text style={styles.optionText}>Help</Text>
          <ArrowVector style={styles.arrowIcon} />
        </TouchableOpacity>

        <View style={styles.notificationContainer}>
          <Text style={styles.optionText}>Notifications</Text>
          <TouchableOpacity
            style={styles.toggleButtonContainer}
            onPress={toggleSwitch}
          >
            <View
              style={[
                styles.toggleButtonBackground,
                isToggled && styles.toggleActiveBackground,
              ]}
            />
            <Animated.View
              style={[
                styles.toggleButtonCircle,
                { transform: [{ translateX: circleTransform }] },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require("../assets/cardsScreen/logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "black",
  },
  topBar: {
    // Style for your top bar
    paddingTop: 14 * (screenHeight / figmaHeight),
    paddingBottom: 12 * (screenHeight / figmaHeight),
    paddingHorizontal: 20 * (screenWidth / figmaWidth),
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    color: "#FCFCFC",
    fontSize: 15 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontStyle: "italic",
    fontWeight: "100",
  },
  titleContainer: {
    paddingTop: 18 * (screenHeight / figmaHeight),
    paddingBottom: 18 * (screenHeight / figmaHeight),
    paddingLeft: 24 * (screenWidth / figmaWidth),
    paddingRight: 155 * (screenWidth / figmaWidth),
    backgroundColor: "black",
  },
  profileTitle: {
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    color: "#F4F4F4",
    top: 18,
    left: 24,
  },
  optionsContainer: {
    position: "absolute",
    top: 361 * (screenHeight / figmaHeight),
    left: 26 * (screenWidth / figmaWidth),
    flexDirection: "column",
    alignItems: "center",
  },
  option: {
    width: 323 * (screenWidth / figmaWidth),
    height: 55 * (screenHeight / figmaHeight),
    backgroundColor: "#242424",
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16 * (screenWidth / figmaWidth),
    paddingVertical: 18 * (screenHeight / figmaHeight),
    marginBottom: 12 * (screenHeight / figmaHeight),
  },
  optionText: {
    color: "#F4F4F4",
    fontSize: 16 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontWeight: "500",
  },
  arrowIcon: {
    width: 6 * (screenWidth / figmaWidth),
    height: 12 * (screenHeight / figmaHeight),
    borderTopWidth: 3 * (screenWidth / figmaWidth),
    borderRightWidth: 3 * (screenWidth / figmaWidth),
    borderColor: "#F4F4F4",
  },
  notificationContainer: {
    width: (323 * screenWidth) / figmaWidth,
    height: (55 * screenHeight) / figmaHeight,
    backgroundColor: "#242424",
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: (16 * screenWidth) / figmaWidth,
    paddingVertical: (18 * screenHeight) / figmaHeight,
  },
  toggleButtonContainer: {
    width: 44 * (screenWidth / figmaWidth),
    height: (23.47 * screenHeight) / figmaHeight,
    borderRadius: 12 * (screenWidth / figmaWidth),
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
    overflow: "hidden",
  },
  toggleButtonBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 12 * (screenWidth / figmaWidth),
  },
  toggleActiveBackground: {
    backgroundColor: "#E8772E", // Change the color when active
  },
  toggleButtonCircle: {
    width: 19.56 * (screenWidth / figmaWidth),
    height: 19.56 * (screenWidth / figmaWidth),
    borderRadius: 10 * (screenWidth / figmaWidth),
    backgroundColor: "#13131C",
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  logo: {
    width: 216 * (screenWidth / figmaWidth),
    height: 110 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 201 * (screenHeight / figmaHeight),
    left: (screenWidth - 216 * (screenWidth / figmaWidth)) / 2,
  },
});

export default SettingScreen;
