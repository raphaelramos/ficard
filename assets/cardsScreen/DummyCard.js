import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const DummyCard = (props) => (
  <Svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="fluent-emoji:credit-card" clipPath="url(#clip0_516_1501)">
      <G id="Group">
        <G id="Group_2" filter="url(#filter0_ddd_516_1501)">
          <Path
            id="Vector"
            d="M27.1193 3.42733L1.89441 15.1899C0.557031 15.8135 -0.0215776 17.4033 0.602053 18.7406L7.32998 33.1687C7.95361 34.5061 9.54332 35.0847 10.8807 34.4611L36.1056 22.6985C37.443 22.0749 38.0216 20.4852 37.398 19.1478L30.6701 4.71969C30.0464 3.38231 28.4567 2.8037 27.1193 3.42733Z"
            fill="url(#paint0_linear_516_1501)"
          />
        </G>
        <Path
          id="Vector_2"
          d="M2.48402 22.7766L0.915715 19.4133L30.9848 5.39187L32.5531 8.75512L2.48402 22.7766Z"
          fill="url(#paint1_linear_516_1501)"
        />
        <Path
          id="Vector_3"
          d="M2.48402 22.7766L0.915715 19.4133L30.9848 5.39187L32.5531 8.75512L2.48402 22.7766Z"
          fill="url(#paint2_linear_516_1501)"
        />
        <Path
          id="Vector_4"
          d="M2.48402 22.7766L0.915715 19.4133L30.9848 5.39187L32.5531 8.75512L2.48402 22.7766Z"
          fill="url(#paint3_linear_516_1501)"
        />
        <G id="Group_3" filter="url(#filter1_ddd_516_1501)">
          <Path
            id="Vector_5"
            d="M9.46436 27.3832C9.25028 27.483 9.00531 27.4937 8.78335 27.4129C8.56139 27.3321 8.38061 27.1664 8.28078 26.9524L7.02613 24.2618C6.92631 24.0477 6.91561 23.8027 6.9964 23.5808C7.07719 23.3588 7.24284 23.178 7.45692 23.0782L26.0554 14.4056C26.2695 14.3057 26.5145 14.295 26.7364 14.3758C26.9584 14.4566 27.1392 14.6223 27.239 14.8364L28.4937 17.527C28.5935 17.741 28.6042 17.986 28.5234 18.208C28.4426 18.4299 28.2769 18.6107 28.0629 18.7105L9.46436 27.3832Z"
            fill="#E2DDDE"
          />
        </G>
        <G id="Group_4" filter="url(#filter2_ddd_516_1501)">
          <Path
            id="Vector_6"
            d="M20.771 18.8757L9.13361 24.3023C8.83642 24.4409 8.70784 24.7941 8.84642 25.0913C8.98501 25.3885 9.33828 25.5171 9.63547 25.3785L21.2729 19.9519C21.5701 19.8133 21.6986 19.4601 21.56 19.1629C21.4215 18.8657 21.0682 18.7371 20.771 18.8757Z"
            fill="url(#paint4_linear_516_1501)"
          />
        </G>
        <G id="Group_5" filter="url(#filter3_ddd_516_1501)">
          <Path
            id="Vector_7"
            d="M32.7084 16.995L30.5225 18.0142C30.0767 18.2221 29.8839 18.752 30.0917 19.1978L31.111 21.3837C31.3189 21.8294 31.8488 22.0223 32.2946 21.8144L34.4804 20.7952C34.9262 20.5873 35.1191 20.0574 34.9112 19.6116L33.8919 17.4257C33.6841 16.9799 33.1542 16.7871 32.7084 16.995Z"
            fill="url(#paint5_linear_516_1501)"
          />
        </G>
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_516_1501"
        x1={14.5069}
        y1={9.30862}
        x2={23.0857}
        y2={27.7059}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#57D8F2" />
        <Stop offset={1} stopColor="#36A3E7" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_516_1501"
        x1={2.02934}
        y1={21.8015}
        x2={32.0973}
        y2={7.78055}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5D476D" />
        <Stop offset={0.88} stopColor="#3D3B3B" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_516_1501"
        x1={1.89434}
        y1={21.512}
        x2={3.51301}
        y2={20.7572}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.239} stopColor="#513E5F" />
        <Stop offset={0.707} stopColor="#513E5F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_516_1501"
        x1={32.0346}
        y1={7.64602}
        x2={31.2942}
        y2={7.9913}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.328} stopColor="#474646" />
        <Stop offset={1} stopColor="#474646" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_516_1501"
        x1={8.84642}
        y1={25.0913}
        x2={20.5505}
        y2={19.6336}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A5A0A1" />
        <Stop offset={1} stopColor="#A6A2A2" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_516_1501"
        x1={34.2212}
        y1={18.1318}
        x2={31.127}
        y2={19.5746}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F9D940" />
        <Stop offset={1} stopColor="#EAC037" />
      </LinearGradient>
      <ClipPath id="clip0_516_1501">
        <Rect width={38} height={38} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DummyCard;
