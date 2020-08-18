import React from "react";
import { useSelector } from "react-redux";
import {View, StyleSheet} from "react-native"
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText"

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((ctg) => ctg.id === catId);
  const avblMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = avblMeals.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });
  if(displayedMeals.length === 0){
    return (
      <View style={styles.screen}>
        <DefaultText>No meals available under this category as per selected Filter. Please check filter...</DefaultText>
      </View>
    )
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((ctg) => ctg.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;

const styles=StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  }
})