import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.find(fav => fav.uid === item.uid)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (uid) => {
    setFavorites(favorites.filter(item => item.uid !== uid));
  };

  return (
    <AppContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </AppContext.Provider>
  );
};
