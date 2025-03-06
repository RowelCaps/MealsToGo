import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component.js";
import FoodList from "../components/FoodList.component.js";

const mockFood = {
  breakfast: ["pork", "chicken", "beef"],
  lunch: ["Sisig", "Lechon", "Kool Aid"],
  dinner: ["Salad", "Beer"],
  drinks: ["Whiskey", "Coffee", "Shabu", "Weed", "Shit", "Fuck", "Bitch"],
};

export default function RestaurantDetail({ route }) {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <FoodList
          title={"Breakfast"}
          foods={mockFood.breakfast}
          icon={"food-apple"}
          isExpanded={breakfastExpanded}
          onPress={setBreakfastExpanded}
        ></FoodList>
        <FoodList
          title={"Lunch"}
          foods={mockFood.lunch}
          icon={"food"}
          isExpanded={lunchExpanded}
          onPress={setLunchExpanded}
        ></FoodList>
        <FoodList
          title={"Dinner"}
          foods={mockFood.dinner}
          icon={"food-variant"}
          isExpanded={dinnerExpanded}
          onPress={setDinnerExpanded}
        ></FoodList>
        <FoodList
          title={"drinks"}
          foods={mockFood.drinks}
          icon={"food-variant"}
          isExpanded={drinksExpanded}
          onPress={setDrinksExpanded}
        ></FoodList>
      </ScrollView>
    </SafeArea>
  );
}
