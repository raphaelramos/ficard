import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const figmaWidth = 375;
const figmaHeight = 812;
const SocialSignInButton = ({ onPress, text, IconComponent }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        colors={["#151515", "#151515"]} // Adjust colors if needed
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <IconComponent style={styles.image} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: (311 * screenWidth) / figmaWidth,
    height: (48 * screenHeight) / figmaHeight,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#242424",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 20,
    elevation: 5,
    marginTop: (12 * screenHeight) / figmaHeight,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: (51 * screenWidth) / figmaWidth,
    paddingVertical: (12 * screenHeight) / figmaHeight,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: (24 * screenWidth) / figmaWidth,
    height: (24 * screenHeight) / figmaHeight,
    marginRight: 3.6, // Space between the image and text
  },
  text: {
    fontFamily: "Urbanist",
    fontSize: (16 * screenWidth) / figmaWidth,
    fontWeight: "500",
    lineHeight: (19 * screenWidth) / figmaWidth,
    color: "#CBCBCB",
    textAlign: "center",
  },
});

export default SocialSignInButton;
