import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export function FavouritesContextProvider({ children }) {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavourites] = useState([]);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("Error Saving", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        // value previously stored
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log("Error Loading", e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId,
    );

    setFavourites(newFavorites);
  };
  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if(user){
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
