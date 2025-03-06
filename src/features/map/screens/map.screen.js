import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components";
import Search from "../components/search.component";
import { useIsFocused } from "@react-navigation/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component.js";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default function MapScreen({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;

      const latDelta = northeastLat - southwestLat;
      setLatDelta(latDelta);
      console.log("Rerender");
    }
  }, [location, viewport, isFocused, restaurants]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() => {
                const restParam = { item: restaurant };

                navigation.navigate("Restaurant", {
                  screen: "RestaurantDetail",
                  params: { restaurant: restParam },
                });
              }}
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </>
  );
}
