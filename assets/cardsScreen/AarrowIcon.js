import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowIcon = (props) => (
  <Svg width={12} height={20} viewBox="0 0 12 20" fill="none" {...props}>
    <Path
      d="M2 2l8 8-8 8"
      stroke="#CBCBCB"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowIcon;
