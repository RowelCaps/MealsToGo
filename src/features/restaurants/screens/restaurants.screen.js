import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component.js";
import { ActivityIndicator } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors.js";

import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component.js";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context.js";
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

export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

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
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
}
