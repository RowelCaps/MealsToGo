import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star.js";
import open from "../../../assets/open.js";
import {
  Address,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  StatusRatingContainer,
  StatusContainer,
  Icon,
} from "./restaurant-info-card.styles.js";
import { Text } from "../../components/typography/text.component.js";

export default function RestaurantInfoCard({ restaurant = {} }) {

  const {
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant.item;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <StatusRatingContainer>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <StatusContainer>
            {isClosedTemporarily && (
              <Text variant="caption">Closed Temporarily</Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
            <Icon source={{ uri: icon }} />
          </StatusContainer>
        </StatusRatingContainer>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
}
