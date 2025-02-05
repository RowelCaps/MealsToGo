import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-top: ${(props) => props.theme.sizes[0]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(Card.Content)`
  padding-top: ${(props) => props.theme.sizes[0]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const StatusRatingContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: ${(props) => props.theme.sizes[0]};
`;

export const StatusContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: ${(props) => props.theme.sizes[0]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
