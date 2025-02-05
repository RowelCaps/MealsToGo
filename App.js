import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import RestaurantsScreen from "./src/features/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context.js";
import { LocationContextProvider } from "./src/services/location/location.context.js";

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

function MyTabs() {
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
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MapScreen() {
  return (
    <>
      <Text>Yeah boi Map</Text>
    </>
  );
}

function SettingsScreen() {
  return (
    <>
      <Text>Yeah boi Settings</Text>
    </>
  );
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
