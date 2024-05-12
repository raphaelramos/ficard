import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeButton = (props) => (
  <Svg width={20} height={18} viewBox="0 0 20 18" fill="none" {...props}>
    <Path
      d="M5 13H8C8.26522 13 8.51957 12.8736 8.70711 12.6485C8.89464 12.4235 
        9 12.1183 9 11.8C9 11.4817 8.89464 11.1765 8.70711 10.9515C8.51957 10.7264 8.26522 
        10.6 8 10.6H5C4.73478 10.6 4.48043 10.7264 4.29289 10.9515C4.10536 11.1765 4 11.4817 
        4 11.8C4 12.1183 4.10536 12.4235 4.29289 12.6485C4.48043 12.8736 4.73478 13 5 13ZM17 
        0H3C2.20435 0 1.44129 0.379285 0.87868 1.05442C0.316071 1.72955 0 2.64522 0 3.6V14.4C0 
        15.3548 0.316071 16.2705 0.87868 16.9456C1.44129 17.6207 2.20435 18 3 18H17C17.7956 18 
        18.5587 17.6207 19.1213 16.9456C19.6839 16.2705 20 15.3548 20 14.4V3.6C20 2.64522 19.6839 
        1.72955 19.1213 1.05442C18.5587 0.379285 17.7956 0 17 0ZM18 14.4C18 14.7183 17.8946 15.0235 
        17.7071 15.2485C17.5196 15.4736 17.2652 15.6 17 15.6H3C2.73478 15.6 2.48043 15.4736 2.29289 
        15.2485C2.10536 15.0235 2 14.7183 2 14.4V8H18V14.4ZM18 6H2V3.6C2 3.28174 2.10536 2.97652 2.29289 
        2.75147C2.48043 2.52643 2.73478 2.4 3 2.4H17C17.2652 2.4 17.5196 2.52643 17.7071 2.75147C17.8946 
        2.97652 18 3.28174 18 3.6V6Z"
    />
  </Svg>
);

export default HomeButton;