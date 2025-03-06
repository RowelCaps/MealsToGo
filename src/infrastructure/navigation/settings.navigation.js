import React, { useEffect } from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screeens/settings.screen";
import favoritesScreen from "../../features/settings/screeens/favorites.screen";

const SettingsStack = createStackNavigator();

export default function SettingsNavigator({ route, navigation }) {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favorites" component={favoritesScreen} />
    </SettingsStack.Navigator>
  );
}
