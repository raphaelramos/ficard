import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const DropDownSVG = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="icon">
      <Path
        id="Vector"
        d="M20 8L12 16L4.00002 8"
        stroke="#E5F240"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default DropDownSVG;
