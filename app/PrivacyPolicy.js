import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import BackIcon from "../assets/splashImages/backIcon"; // Adjust path as needed

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const figmaWidth = 375;
const figmaHeight = 812;

const PrivacyPolicy = ({ route, navigation }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus
          arcu felis bibendum ut tristique et egestas quis. In nulla posuere
          sollicitudin aliquam ultrices sagittis orci a. Amet tellus cras
          adipiscing enim. Ac odio tempor orci dapibus ultrices in iaculis.
          Elementum facilisis leo vel fringilla est ullamcorper eget. Sit amet
          venenatis urna cursus eget nunc scelerisque viverra. Interdum velit
          euismod in pellentesque massa placerat duis. Ac ut consequat semper
          viverra nam libero justo laoreet sit. Et sollicitudin ac orci
          phasellus. Eget duis at tellus at urna condimentum mattis
          pellentesque. Velit dignissim sodales ut eu sem integer. Faucibus nisl
          tincidunt eget nullam non nisi est sit amet. Nibh ipsum consequat nisl
          vel pretium lectus quam. Arcu ac tortor dignissim convallis aenean et
          tortor at. Mattis vulputate enim nulla aliquet. Viverra tellus in hac
          habitasse platea. Lectus vestibulum mattis ullamcorper velit sed
          ullamcorper. Egestas sed tempus urna et pharetra pharetra.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Black background
    padding: 20,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: screenWidth, // Full screen width
    height: 60 * (screenHeight / figmaHeight), // Scaled height
    paddingHorizontal: 24, // Left padding
    paddingVertical: 18 * (screenHeight / figmaHeight), // Top and bottom padding
    marginBottom: 20, // Space below the back container
    top: (50 * screenHeight) / figmaHeight,
  },
  backIcon: {
    // Space between icon and title
  },
  title: {
    width: 136 * (screenWidth / figmaWidth), // Scaled width
    height: 24, // Height as per design
    fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "center",
    color: "#F4F4F4",
    marginLeft: 50,
  },
  scrollView: {
    position: "absolute",
    top: 123 * (screenHeight / figmaHeight), // Scaled top position
    left: 32,
    width: 334 * (screenWidth / figmaWidth), // Scaled width
    height: 654, // Fixed height as per Figma
  },
  textContent: {
    fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
    color: "#FFFFFF", // Text color
    // No specific letter-spacing mentioned; adjust if needed
    padding: 20, // Padding inside the scroll view for text
  },
  // Add more styles for content as needed
});

export default PrivacyPolicy;
