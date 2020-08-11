import React from "react";
// import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoriteMealScreen = (props) => {
  const favMeals = MEALS.filter((meal) => {
    return meal.id === "m1" || meal.id === "m2";
  });
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoriteMealScreen;
