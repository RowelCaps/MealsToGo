import React, { useContext } from "react";
import { View, Text, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigation.js";
import { AccountNavigator } from "./account.navigation.js";

import { AuthenticationContext } from "../../services/authentication/authentication.context.js";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  console.log("Is Authenticated: " + isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
