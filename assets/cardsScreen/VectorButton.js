import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VectorButton = (props) => (
  <Svg
    width={10}
    height={15}
    viewBox="0 0 10 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      id="Vector"
      d="M2 13.5L8 7.5L2 1.5"
      stroke="#F4F4F4"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default VectorButton;
