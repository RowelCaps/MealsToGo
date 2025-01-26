import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 10px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
