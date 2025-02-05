import React, { useContext } from "react";
import { FlatList } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { ActivityIndicator } from "react-native-paper";

import { colors } from "../../infrastructure/theme/colors.js";

import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { RestaurantContext } from "../../services/restaurants/restaurants.context.js";
import Search from "../components/search.component.js";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 20,
  },
})``;

const RestaurantActivityIndicator = styled(ActivityIndicator)`
  flex: 1;
`;

export default function RestaurantsScreen() {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

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
    <SafeArea>
      <Search />
      {isLoading && (
        <RestaurantActivityIndicator
          size={"large"}
          animating={true}
          color={"tomato"}
        />
      )}
      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={(item) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
}
