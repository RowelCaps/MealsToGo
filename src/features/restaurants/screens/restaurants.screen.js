import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component.js";
import { ActivityIndicator } from "react-native-paper";

import { FadeInView } from "../../../components/animations/fade.animation.js";

import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component.js";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context.js";
import { FavoritesContext } from "../../../services/favourites/favorites.context.js";
import Search from "../components/search.component.js";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component.js";

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
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoriteToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
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
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
}
