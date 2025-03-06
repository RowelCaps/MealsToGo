import React from "react";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export function MapCallout({ restaurant }) {
  return <CompactRestaurantInfo restaurant={restaurant} />;
}
