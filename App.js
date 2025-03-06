import React, { useEffect, useState } from "react";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigation.js";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context.js";
import { Navigation } from "./src/infrastructure/navigation/index.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvISKeArHrt5ArS9c_Mh1dja6cEkUjPfg",
  authDomain: "mealstogo-1f2ac.firebaseapp.com",
  projectId: "mealstogo-1f2ac",
  storageBucket: "mealstogo-1f2ac.firebasestorage.app",
  messagingSenderId: "430373713532",
  appId: "1:430373713532:web:05f936a4f760f7f5987bf9",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  let [oswaldLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
