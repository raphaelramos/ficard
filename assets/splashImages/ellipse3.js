// Ellipse3.js
import React from "react";
import Svg, { Circle, RadialGradient, Defs, Stop } from "react-native-svg";

const Ellipse3 = () => (
  <Svg height="119" width="146" viewBox="0 0 146 119" fill="none">
    <Defs>
      <RadialGradient
        id="paint0_radial_419_3969"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.5 -16.5) rotate(90) scale(135.5)"
      >
        <Stop stopColor="#E8772E" />
        <Stop offset="1" stopColor="#E5F240" stopOpacity="0" />
      </RadialGradient>
    </Defs>
    <Circle
      cx="10.5"
      cy="-16.5"
      r="135.5"
      fill="url(#paint0_radial_419_3969)"
      opacity="0.2"
    />
  </Svg>
);

export default Ellipse3;
