// WelcomeScreen.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";

import CustomButton from "./CustomButton";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// Figma file dimensions
const figmaWidth = 375;
const figmaHeight = 812;

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        navigation.navigate("Card");
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/welcome_screen_background.png")}
      style={styles.background}
    >
      <Image source={require("../assets/cards.png")} style={styles.cardImage} />
      <View style={styles.textView}>
        <Text style={styles.text1}>Veja suas transações</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Começar"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: (354.21 * screenWidth) / figmaWidth,
    height: (336.43 * screenHeight) / figmaHeight,
    position: "absolute",
    top: (84 * screenHeight) / figmaHeight,
    left: (10 * screenWidth) / figmaWidth,
    resizeMode: "contain", // This will ensure the entire image is visible
  },
  text1: {
    fontFamily: "Urbanist",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 42,
    letterSpacing: -0.3,
    textAlign: "center",
    color: "#FFFFFF", // adjust color as needed
    marginBottom: 20, // gap between the two texts
  },
  textView: {
    width: (335 * screenWidth) / figmaWidth,
    height: (122 * screenHeight) / figmaHeight,
    position: "absolute",
    top: (490 * screenHeight) / figmaHeight,
    left: (20 * screenWidth) / figmaWidth,
  },
  text2: {
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: -0.3,
    textAlign: "center",
    color: "#FFFFFF", // adjust color as needed
  },
  buttonContainer: {
    position: "absolute",
    top: (709 * screenHeight) / figmaHeight,
    left: (24 * screenWidth) / figmaWidth,
    width: (327 * screenWidth) / figmaWidth, // Adjusted for screen width
  },
  // Add other styles as needed
});

export default WelcomeScreen;
