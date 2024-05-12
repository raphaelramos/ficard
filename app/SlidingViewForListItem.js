import React, { Component } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  PanResponder,
  Text,
} from "react-native";

import { useTabBarVisibility } from "./TabBarVisibilityContext"; // Update the import path
import DropDownSVG from "../assets/cardsScreen/DropDownSVG";
import DummyCard from "../assets/cardsScreen/DummyCard";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const figmaWidth = 375;
const figmaHeight = 812;

// Higher-order component to provide context to the class component
function withTabBarVisibility(Component) {
  return function WrapperComponent(props) {
    const { setTabBarVisible } = useTabBarVisibility();
    return <Component {...props} setTabBarVisible={setTabBarVisible} />;
  };
}

class SlidingViewForListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(screenHeight), // Start off-screen
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 0) {
          this.state.slideAnim.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 100) {
          this.slideDown();
        } else {
          this.slideUp();
        }
      },
    });
  }

  slideUp = () => {
    this.props.setTabBarVisible(false); // Hide the tab bar
    Animated.timing(this.state.slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  slideDown = () => {
    Animated.timing(this.state.slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (this.props.onRequestClose) {
        this.props.onRequestClose();
      }
      this.props.setTabBarVisible(true); // Show the tab bar again
    });
  };

  componentDidMount() {
    this.slideUp();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.slidingView,
          { transform: [{ translateY: this.state.slideAnim }] },
        ]}
        {...this.panResponder.panHandlers}
      >
        <TouchableOpacity onPress={this.slideDown} style={styles.pullBar} />
        <View style={styles.contentContainer}>
          <Text style={styles.chooseBoxText}>Choose</Text>
          <Text style={styles.fromText}>Type</Text>
          <View style={styles.shapeContainer}>
            <View style={styles.leftPart}>
              <DummyCard />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.moradiaText}>Streaming</Text>
              {/* <Text style={styles.priceText}>R$ ??</Text> */}
            </View>
            <DropDownSVG style={styles.dropdownIcon} />
          </View>
          <TouchableOpacity
            style={[styles.button, { top: (180 * screenHeight) / figmaHeight }]}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>

          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  slidingView: {
    position: "absolute",
    width: 375 * (screenWidth / figmaWidth),
    height: 288 * (screenHeight / figmaHeight),
    backgroundColor: "#242424",
    borderRadius: 28,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    bottom: 0,
  },
  pullBar: {
    width: 134 * (screenWidth / figmaWidth),
    height: 6 * (screenHeight / figmaHeight),
    backgroundColor: "#13131C",
    borderRadius: 3,
    alignSelf: "center",
    marginTop: 10 * (screenHeight / figmaHeight),
  },
  contentContainer: {
    // Styles for your content container
  },

  chooseBoxText: {
    fontFamily: "Urbanist-Bold",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 22 * (screenHeight / figmaHeight),
    letterSpacing: 0,
    textAlign: "left",
    color: "#FFFFFF", // Add a color, if needed
    width: 95 * (screenWidth / figmaWidth), // Adjust width as per your layout
    height: 22 * (screenHeight / figmaHeight), // Adjust height as per your layout
    marginTop: 14 * (screenHeight / figmaHeight), // Top margin
    marginLeft: 24 * (screenWidth / figmaWidth), // Left margin
    // Add other styling as needed
  },
  fromText: {
    left: 24 * (screenWidth / figmaWidth),
    color: "#787878",
    fontSize: 15 * (screenHeight / figmaHeight),
    fontWeight: 700,
    fontFamily: "Urbanist-Bold",
    width: 67 * (screenWidth / figmaWidth),
    height: 18 * (screenHeight / figmaHeight),
    marginTop: 14 * (screenWidth / figmaWidth),
  },
  shapeContainer: {
    width: 332 * (screenWidth / figmaWidth),
    height: 70 * (screenHeight / figmaHeight),
    paddingVertical: 16 * (screenHeight / figmaHeight),
    paddingHorizontal: 20 * (screenWidth / figmaWidth),
    backgroundColor: "#151515",
    borderRadius: 50,
    flexDirection: "row",
    marginTop: 14 * (screenWidth / figmaWidth),
    marginLeft: 23 * (screenHeight / figmaHeight),
    shadowColor: "#3754AA",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  leftPart: {
    width: 38 * (screenWidth / figmaWidth),
    height: 38 * (screenHeight / figmaHeight),
    top: 5,
    // Add styles for your custom graphics
  },
  textContainer: {
    // Styles for the text container
    width: 139 * (screenWidth / figmaWidth),
    height: 38 * (screenHeight / figmaHeight),
  },
  moradiaText: {
    color: "#F4F4F4",
    fontSize: 16 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontWeight: "500",
    marginBottom: 5 * (screenHeight / figmaHeight),
    marginLeft: 18 * (screenWidth / figmaWidth),
  },
  priceText: {
    color: "#939393",
    fontSize: 12 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontWeight: "500",
    marginLeft: 18 * (screenWidth / figmaWidth),
  },
  rightPart: {
    // Add styles for your custom arrow or graphics
  },
  dropdownIcon: {
    width: 24 * (screenWidth / figmaWidth),
    height: 24 * (screenHeight / figmaHeight),
    right: 18 * (screenWidth / figmaWidth),
    marginLeft: 75 * (screenWidth / figmaWidth),
    marginTop: 10 * (screenHeight / figmaHeight),

    // Rotate the icon by 90 degrees
  },
  button: {
    width: (327 * screenWidth) / figmaWidth,
    height: (56 * screenHeight) / figmaHeight,
    borderRadius: 28,
    backgroundColor: "#E8772E",
    position: "absolute",
    left: (23 * screenWidth) / figmaWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#13131C",
    fontFamily: "Urbanist",
    fontSize: (16 * screenHeight) / figmaHeight,
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default withTabBarVisibility(SlidingViewForListItem); // Export the wrapped component
