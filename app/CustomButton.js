// CustomButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: (327 * screenWidth) / 375, // Adjusted for screen width
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E8772E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Adjust the margin as needed
  },
  buttonText: {
    // fontFamily: 'Roboto', // Ensure this font is loaded
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: "#151515",
  },
});

export default CustomButton;
