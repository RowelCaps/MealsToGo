import React from "react";
import { List } from "react-native-paper";

export default function FoodList(props) {
  const { title, foods, icon, isExpanded, onPress } = props;

  return (
    <List.Accordion
      title={title}
      left={(props) => <List.Icon {...props} icon={icon} />}
      expanded={isExpanded}
      onPress={() => onPress(!isExpanded)}
    >
      {foods.map((food, index) => {
        return <List.Item key={index} title={food} />;
      })}
    </List.Accordion>
  );
}
