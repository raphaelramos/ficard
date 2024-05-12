import React, { useState, useEffect } from "react";

import SplashScreen from "./SplashScreen";

export default function App() {
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 3000);
  }, []);

  if (isSplashScreenVisible) {
    return <SplashScreen />;
  }
}
