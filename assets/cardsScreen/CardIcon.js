import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";

const CardIcon = (props) => (
  <Svg width="22" height="14" viewBox="0 0 256 256" {...props}>
    <G
      transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      stroke="none"
      strokeWidth={0}
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      fill="none"
      fillRule="nonzero"
      opacity={1}
    >
      <Path
        d="M85.855 74.526H4.145A4.144 4.144 0 010 70.382V19.618a4.145 4.145 0 014.145-4.145h81.711a4.145 4.145 0 014.145 4.145v50.764a4.146 4.146 0 01-4.146 4.144z"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="#5d647f"
        fillRule="nonzero"
        opacity={1}
      />
      <Rect
        y={27.34}
        rx={0}
        ry={0}
        width={90}
        height={12.81}
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="#b8bac0"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        d="M80.116 48.843H57.085a1 1 0 00-1 1v12.814a1 1 0 001 1h23.031a1 1 0 001-1V49.843a1 1 0 00-1-1z"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="#ffd100"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        d="M32.916 50.843H9.884a1 1 0 110-2h23.032a1 1 0 110 2zM18.597 58.544H9.884a1 1 0 110-2h8.713a1 1 0 110 2z"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="#b8bac0"
        fillRule="nonzero"
        opacity={1}
      />
    </G>
  </Svg>
);

export default CardIcon;
