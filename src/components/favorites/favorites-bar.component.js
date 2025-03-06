import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component.js";
import { Text } from "../typography/text.component.js";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export function FavoritesBar({ favorites, onNavigate }) {
    
  if (favorites.length <= 0) return null;

  return (
    <FavoritesWrapper>
        <Text variant="caption">Favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
            console.log(JSON.stringify(restaurant));
          const key = restaurant.name.split(" ").join("");
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant: { item: restaurant },
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
}
