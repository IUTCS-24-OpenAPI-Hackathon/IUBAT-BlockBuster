import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [nearby, setNearby] = useState({});

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        nearby, setNearby
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
