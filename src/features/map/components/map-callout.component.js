import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Callout } from "react-native-maps";

const CalloutContainer = styled(Callout)`
    position: relative;
`;

const DetailContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

const RestaurantImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 12px;
  resize-mode: cover;
`;

const RestaurantName = styled.Text`
    color: black;
    font-family: ${(props) => props.theme.fonts.monospace};
`;

export function MapCallout({ restaurant }) {
    console.log(JSON.stringify(restaurant.name));
  return (
    <CalloutContainer>
      <DetailContainer>
        <RestaurantImage source={{ uri: restaurant.photos[0] }} />
        <RestaurantName>{restaurant.name}</RestaurantName>
      </DetailContainer>
    </CalloutContainer>
  );
}
