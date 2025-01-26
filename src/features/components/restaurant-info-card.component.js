import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  color: red;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>name</Title>
      </Card.Content>
    </RestaurantCard>
  );
}