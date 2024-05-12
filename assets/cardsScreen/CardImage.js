import * as React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Svg, { G, Rect, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const figmaWidth = 375;
const figmaHeight = 812;
const CardImage = ({ children }) => (
  <View style={styles.cardContainer}>
    <Svg
      style={StyleSheet.absoluteFill}
      width={(327 * screenWidth) / figmaWidth}
      height={(194 * screenHeight) / figmaHeight}
      // viewBox="0 0 327 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_b_419_2019)">
        <Rect
          width={(327 * screenWidth) / figmaWidth}
          height={(194 * screenHeight) / figmaHeight}
          rx={20}
          fill="url(#paint0_linear_419_2019)"
          fillOpacity={0.7}
        />
        <Rect
          x={0.25}
          y={0.25}
          width={(325 * screenWidth) / figmaWidth}
          height={(192 * screenHeight) / figmaHeight}
          rx={19.75}
          stroke="#C3C5C9"
          strokeWidth={0.5}
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_419_2019"
          x1={(327 * screenWidth) / figmaWidth}
          y1={0}
          x2={0.00636659}
          y2={(192 * screenHeight) / figmaHeight}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#414347" />
          <Stop offset={1} stopColor="#414347" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
    {children}
  </View>
);
const styles = {
  cardContainer: {
    width: (327 * screenWidth) / figmaWidth,
    height: (194 * screenHeight) / figmaHeight,
    borderRadius: 20,
    overflow: "hidden", // Ensures that children respect the border radius
    marginBottom: (20 * screenHeight) / figmaHeight,
  },
};
export default CardImage;
