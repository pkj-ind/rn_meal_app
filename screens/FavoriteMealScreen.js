import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

// import { StyleSheet, Text, View } from 'react-native'
// import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

const FavoriteMealScreen = (props) => {

  const favMeals = useSelector (state => state.meals.favoritMeals)
  // const favMeals = MEALS.filter((meal) => {
  //   return meal.id === "m1" || meal.id === "m2";
  // });
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoriteMealScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer(); 
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteMealScreen;
