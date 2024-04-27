import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [nearby, setNearby] = useState([]);
  const [geo, setGeo] = useState({ lat: "", lon: "" });
  const [localLocation, setLocalLocation] = useState({
    latitude: "",
    longitude: "",
  });
  // const [places, setPlace] = useState([]);

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        nearby,
        setNearby,
        geo,
        setGeo,
        localLocation,
        setLocalLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
