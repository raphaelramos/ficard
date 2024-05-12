import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const StatisticsButton = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 17H7V11.6571C7.84576 11.2973 8.23715 11.2965 9 11.6571V17ZM13 17H11V9.51999C11.8298 9.09455 12.2674 9.09723 13 9.51999V17ZM17 17H15V7.38284C15.7957 6.87424 16.2337 6.87055 17 7.38284V17Z"
      fill="#AEAEAE"
    />
    <Path
      d="M17.4 3L6.6 3C4.61178 3 3 4.61178 3 6.6L3 17.4C3 19.3882 4.61178 21 6.6 21H17.4C19.3882 21 21 19.3882 21 17.4V6.6C21 4.61178 19.3882 3 17.4 3Z"
      stroke="#AEAEAE"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default StatisticsButton;
