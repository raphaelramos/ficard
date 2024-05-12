import React, { createContext, useContext, useState } from "react";

const TabBarVisibilityContext = createContext();

export const useTabBarVisibility = () => useContext(TabBarVisibilityContext);

export const TabBarVisibilityProvider = ({ children }) => {
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  return (
    <TabBarVisibilityContext.Provider
      value={{ isTabBarVisible, setTabBarVisible }}
    >
      {children}
    </TabBarVisibilityContext.Provider>
  );
};
