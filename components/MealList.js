import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";
const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoritMeals);
  

  const renderMealItem = (itemData) => {
    const isFavorite=favoriteMeals.some(meal => meal.id === itemData.item.id)
    // console.log("Item Title", itemData.item.title);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "Meal Details",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav:isFavorite
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
