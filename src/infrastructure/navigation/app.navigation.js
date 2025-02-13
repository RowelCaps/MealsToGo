import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import RestaurantNavigator from "./restaurants.navigator.js";
import MapScreen from "../../features/map/screens/map.screen.js";

const Tab = createBottomTabNavigator();

function GetIconFromScreenName(focusScreen, size, color) {
  switch (focusScreen) {
    case "Restaurants":
      return <Ionicons name="restaurant" size={size} color={color} />;
    case "Map":
      return <Feather name="map" size={size} color={color} />;
    case "Settings":
      return <Feather name="settings" size={size} color={color} />;
  }
}

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          GetIconFromScreenName(route.name, size, color),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <>
      <Text>Yeah boi Settings</Text>
    </>
  );
}
