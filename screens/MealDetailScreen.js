import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigateData) => {
  const mealId = navigateData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => <Text>Fav!!</Text>
  };
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
