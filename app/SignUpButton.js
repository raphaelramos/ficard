import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const figmaWidth = 375;

const SignUpButton = ({ onPress, text }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPress && onPress();
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.button}
    >
      <LinearGradient
        colors={isPressed ? ["#242424", "#242424"] : ["#151515", "#151515"]}
        style={styles.gradient}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: (308 * screenWidth) / figmaWidth,
    height: 43,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#242424",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 20,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 51,
    paddingVertical: 12,
  },
  text: {
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: "#E8772E", // Adjust text color as needed
    height: 19,
    textAlign: "center", // Center text alignment
  },
});

export default SignUpButton;
