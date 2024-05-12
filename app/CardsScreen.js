import AsyncStorage from "@react-native-async-storage/async-storage";
import { format, addMonths, subMonths, lastDayOfMonth } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Image,
} from "react-native";
import ArrowIcon from "../assets/cardsScreen/AarrowIcon";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const figmaWidth = 375;
const figmaHeight = 812;
const CardsScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      setUser(JSON.parse(await AsyncStorage.getItem("user")));
    }
    fetchUser();
  }, []);

  const handleNextDate = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePreviousDate = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  useEffect(() => {
    const from = `${currentDate.getFullYear()}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-01`;
    const to = `${currentDate.getFullYear()}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-${format(lastDayOfMonth(currentDate), "dd")}`;
    // fetchData(from, to);
  }, [currentDate]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {isLoading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="##FFFFFF" />
        </View>
      )}

      {/* Parent Layout */}
      <View style={styles.parentLayout}>
        {/* iOS/Status Bar - Empty */}
        <View style={styles.statusBar} />

        <View style={styles.userProfileHeader}>
          <View style={styles.profileContent}>
            <Image
              source={require("../assets/cardsScreen/profile_image.png")}
              style={styles.profileImage}
            />

            <View style={styles.verticalLayout}>
              <Text style={styles.usernameText}>Olá, {user.firstName}</Text>

              <View style={styles.walletShape}>
                <View style={styles.walletIconContainer}>
                  <Image
                    source={require("../assets/cardsScreen/wallet-icon.png")} // Update with your image path
                    style={styles.walletIcon}
                  />
                </View>
                <Text style={styles.walletText}>32.06 ncn</Text>
              </View>
            </View>
          </View>

          <View style={styles.bellFrame}>
            <Image
              source={require("../assets/cardsScreen/bellIcon.png")} // Update with your image path
              style={styles.bellIcon}
            />
          </View>
        </View>
        <View style={styles.dateContainer}>
          {/* Left Arrow */}
          <TouchableOpacity
            onPress={handlePreviousDate}
            style={styles.arrowLeft}
          >
            <ArrowIcon style={{ transform: [{ rotate: "180deg" }] }} />
          </TouchableOpacity>

          {/* Date Text */}
          <Text style={styles.dateText}>
            {format(currentDate, "MMMM y", { locale: ptBR })}
          </Text>

          {/* Right Arrow */}
          <TouchableOpacity onPress={handleNextDate} style={styles.arrowRight}>
            <ArrowIcon style={{ transform: [{ rotate: "360deg" }] }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.lastUpdatedText}>Serviço não criado</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  slidingView: {
    position: "absolute",
    bottom: 0,
    width: 375 * (screenWidth / figmaWidth),
    height: 509,
    backgroundColor: "#242424",
    borderRadius: 28,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    zIndex: 2,
  },
  parentLayout: {
    width: 378 * (screenWidth / figmaWidth), // Scaled width
    height: 150 * (screenHeight / figmaHeight), // Scaled height
    alignItems: "center",
    justifyContent: "center",
  },
  statusBar: {
    width: screenWidth, // Full screen width
    height: 44 * (screenHeight / figmaHeight), // Scaled height
    backgroundColor: "#000000", // Black status bar
  },
  userProfileHeader: {
    width: 327 * (screenWidth / figmaWidth), // Scaled width
    height: 46 * (screenHeight / figmaHeight), // Scaled height
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 46 * (screenWidth / figmaWidth), // Scaled width
    height: 46 * (screenHeight / figmaHeight), // Scaled height
    borderRadius: 23 * (screenWidth / figmaWidth), // Half of width for circle shape
  },
  verticalLayout: {
    marginLeft: 12 * (screenWidth / figmaWidth),
  },
  usernameText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  walletShape: {
    width: 108 * (screenWidth / figmaWidth), // Scaled width
    height: 24 * (screenHeight / figmaHeight), // Scaled height
    borderRadius: 1000, // Highly rounded corners
    backgroundColor: "#E8772E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10 * (screenHeight / figmaHeight),
    paddingHorizontal: 10 * (screenWidth / figmaWidth),
    flexDirection: "row", // Align icon and text horizontally
  },
  bellFrame: {
    width: 44 * (screenWidth / figmaWidth), // Scaled width
    height: 44 * (screenHeight / figmaHeight), // Scaled height
    borderRadius: 22 * (screenWidth / figmaWidth), // Half for circle shape
    padding: 10 * (screenWidth / figmaWidth),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
  },
  bellIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  walletIconContainer: {
    width: 18 * (screenWidth / figmaWidth),
    height: 18 * (screenHeight / figmaHeight),
    borderRadius: 9 * (screenWidth / figmaWidth), // Half of width
    padding: 2 * (screenWidth / figmaWidth),
    backgroundColor: "#FFFFFF5C",
    justifyContent: "center",
    alignItems: "center",
  },
  walletIcon: {
    width: 14 * (screenWidth / figmaWidth),
    height: 14 * (screenHeight / figmaHeight),
    resizeMode: "contain",
  },
  walletText: {
    width: 67 * (screenWidth / figmaWidth),
    height: 26 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist-Bold",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0.01,
    textAlign: "left",
    color: "#101010",
    marginLeft: 10 * (screenWidth / figmaWidth), // Assuming white text color; adjust as needed
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 520 * (screenWidth / figmaWidth),
    height: 60 * (screenHeight / figmaHeight),
    paddingHorizontal: 146.5 * (screenWidth / figmaWidth),
    paddingVertical: 18 * (screenHeight / figmaHeight),
  },
  arrowIcon: {
    width: 8 * (screenWidth / figmaWidth),
    height: 16 * (screenHeight / figmaHeight),
    borderColor: "#CBCBCB",
    borderWidth: 3,
  },
  dateText: {
    width: 131 * (screenWidth / figmaWidth),
    height: 24 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "center",
    color: "#FFFFFF",
  },

  mainContainer: {
    position: "absolute", // Position absolutely within the parent
    top: 158 * (screenHeight / figmaHeight), // Scaled Y position
    left: 24 * (screenWidth / figmaWidth), // Scaled X position
    width: 327 * (screenWidth / figmaWidth), // Scaled width
    height: 556 * (screenHeight / figmaHeight),

    // Additional styling as needed
  },
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
    top: 18 * (screenHeight / figmaHeight), // Scaled top position
    left: 12 * (screenWidth / figmaWidth), // Scaled left position
    width: 84 * (screenWidth / figmaWidth), // Scaled width
    height: 48 * (screenHeight / figmaHeight), // Scaled height
    paddingHorizontal: 30 * (screenWidth / figmaWidth), // Scaled horizontal padding
    paddingVertical: 12 * (screenHeight / figmaHeight), // Scaled vertical padding
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
    top: 32 * (screenHeight / figmaHeight), // Scaled top position
    left: 54 * (screenWidth / figmaWidth), // Scaled left position
    width: 20 * (screenWidth / figmaWidth), // Fixed width
    height: 18 * (screenHeight / figmaHeight), // Fixed height
    // color: '#000000', // Icon color when inside selector
  },
  staticsButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight), // Scaled top position
    left: 135 * (screenWidth / figmaWidth), // Scaled left position
    width: 24 * (screenWidth / figmaWidth), // Fixed width
    height: 24 * (screenHeight / figmaHeight), // Fixed height
    // Additional styling if needed
  },
  userButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight), // Scaled top position
    left: 216 * (screenWidth / figmaWidth), // Scaled left position
    width: 24, // Fixed width
    height: 24, // Fixed height
    // Additional styling if needed
  },
  settingButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight), // Scaled top position
    left: 297 * (screenWidth / figmaWidth), // Scaled left position
    width: 24, // Fixed width
    height: 24, // Fixed height
    // Additional styling if needed
  },
  menuButton: {
    position: "absolute",
    top: 32 * (screenHeight / figmaHeight),
    width: 24 * (screenWidth / figmaWidth),
    height: 24,
    // ... other styles if needed ...
  },
  card: {
    width: 327 * (screenWidth / figmaWidth), // scaled width
    height: 193.77 * (screenHeight / figmaHeight), // scaled height
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#C3C5C9",
    // No need for backgroundColor here as LinearGradient is used
    shadowColor: "#414347", // shadow color
    shadowOffset: { width: 0, height: 6 }, // shadow offset
    shadowOpacity: 0.3, // shadow opacity
    shadowRadius: 6, // shadow blur radius
    elevation: 6, // for Android
  },
  incomeExpenseCard: {
    position: "absolute",
    bottom: 4 * (screenWidth / figmaWidth), // adjust this as needed
    // width: 308 * (screenWidth / figmaWidth), // ensure this matches the SVG width
    // height: 72 * (screenHeight / figmaHeight), // ensure this matches the SVG height
    borderRadius: 20,
    overflow: "hidden",
    left: 3.5 * (screenHeight / figmaHeight),
  },
  cardText: {
    color: "#FFF",
    fontFamily: "Urbanist-Bold", // Make sure this font is imported and available in your project
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24, // Adjust as needed since 'normal' is not a valid value in React Native
    letterSpacing: -0.3,
    top: 27 * (screenHeight / figmaHeight),
    left: 27 * (screenWidth / figmaWidth),
    // Positioning and other styling as needed
  },
  cardNumber: {
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    letterSpacing: -0.3,
    color: "#FFFFFF",
    height: 17 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 34 * (screenHeight / figmaHeight),
    left: 243 * (screenWidth / figmaWidth),
    textAlign: "left",
  },
  budgetText: {
    fontFamily: "Urbanist-Bold", // Make sure this font is imported and available
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: -0.3,
    color: "#FFFFFF",
    width: 100,
    height: 24,
    position: "absolute",
    top: 70 * (screenHeight / figmaHeight),
    left: 27 * (screenWidth / figmaWidth),
    textAlign: "left",
  },
  budgetAmount: {
    fontFamily: "Urbanist", // Make sure this font is imported and available
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
    letterSpacing: -0.3,
    color: "#FFFFFF",
    height: 19 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 76 * (screenHeight / figmaHeight), // Adjust as needed
    left: 232 * (screenWidth / figmaWidth), // Adjust as needed
    textAlign: "right",
  },

  spentText: {
    fontFamily: "Urbanist", // Make sure this font is imported and available
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: -0.01, // React Native doesn't support 'em' units, use a decimal value
    color: "#000000",
    width: 107 * (screenWidth / figmaWidth),
    height: 16 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 12 * (screenHeight / figmaHeight), // Adjust as needed
    left: 26 * (screenWidth / figmaWidth), // Adjust as needed
    textAlign: "left",
  },

  spentAmount: {
    fontFamily: "Urbanist-Bold", // Ensure this font is imported and available
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: -0.01, // React Native doesn't support 'em' units, use a decimal value
    color: "#000000",
    width: 120 * (screenWidth / figmaWidth),
    height: 24 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 36 * (screenHeight / figmaHeight), // Adjust as needed
    left: 26 * (screenWidth / figmaWidth),
    textAlign: "left",
  },
  remainingText: {
    fontFamily: "Urbanist", // Ensure this font is imported and available
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: -0.01, // React Native doesn't support 'em' units, use a decimal value
    color: "#000000",
    height: 16 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 12 * (screenHeight / figmaHeight), // Adjust as needed
    left: 210 * (screenWidth / figmaWidth), // Adjust as needed
    textAlign: "left",
  },
  remainingAmount: {
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: -0.01, // Use a decimal value
    color: "#010101",
    width: 89 * (screenWidth / figmaWidth),
    height: 24 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 36 * (screenHeight / figmaHeight),
    left: 210 * (screenWidth / figmaWidth),
    textAlign: "left",
  },
  addCardButton: {
    width: 327 * (screenWidth / figmaWidth), // equivalent to 327px
    height: 75 * (screenHeight / figmaHeight), // equivalent to 75px
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "#000",
    flexShrink: 0,
    borderStyle: "dotted",
    justifyContent: "center", // Center children vertically in the container
    alignItems: "center",

    // Add any additional styling you need
  },
  addCardIcon: {
    width: 28,
    height: 28,
    position: "absolute",
  },
  lastUpdatedText: {
    width: 335 * (screenWidth / figmaWidth),
    height: 17 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 17,
    letterSpacing: -0.3,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 20,
  },
  customAlertContainer: {
    display: "flex",
    width: 331 * (screenWidth / figmaWidth), // Assuming px is the unit, as React Native uses density-independent pixels
    height: 85 * (screenHeight / figmaHeight),
    padding: 10 * (screenHeight / figmaHeight),
    alignItems: "flex-start",
    borderRadius: 6,
    backgroundColor: "#FF3838", // Directly using the color value
    position: "absolute",
    top: 420 * (screenHeight / figmaHeight), // Positioning it at the same vertical position as addCardButton
    // Horizontally centering the alert
    zIndex: 10, // Making sure the alert is above other content
    // padding: 1, // Ensure there's padding to prevent content from touching the edges
    justifyContent: "center",
  },

  customAlertText: {
    color: "#FFFFFF", // Assuming you want the text color to be white for contrast
    fontSize: 16, // Example text size, adjust as needed
  },
  alertMessage: {
    alignSelf: "stretch",
    color: "#FFF",
    fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
    // marginTop: 8* (screenHeight / figmaHeight), // Use marginTop for positioning from the top inside the container
    marginLeft: 20, // Use marginLeft for positioning from the left inside the container
  },
  httpErrorMessage: {
    alignSelf: "stretch",
    color: "#FFF",
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    marginTop: 10 * (screenHeight / figmaHeight), // Adjust the top margin as needed for spacing between the two messages
    marginLeft: 20 * (screenHeight / figmaHeight), // Keep consistent with the first message for alignment
  },
  alertIcon: {
    width: 20,
    height: 20,
    left: 287 * (screenHeight / figmaHeight),
  },

  // ... Additional styles as needed
});

export default CardsScreen;
