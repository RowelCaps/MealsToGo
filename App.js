import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import RestaurantsScreen from "./src/features/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 10,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
  },
});
