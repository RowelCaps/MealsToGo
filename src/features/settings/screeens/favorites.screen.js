import React, { useContext } from "react";
import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favourites/favorites.context";

const FavoriteList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 20,
  },
})``;

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      <FavoriteList
        data={favorites}
        renderItem={(item) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Restaurant", {
                screen: "RestaurantDetail",
                params: { restaurant: item },
              })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
