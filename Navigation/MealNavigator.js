import React from "react";
import { createStackNavigator } from "react-navigation-stack"; // react navigator 4
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteMealScreen from "../screens/FavoriteMealScreen";

import Colors from "../constants/Colors";
import { Platform } from "react-native";

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealScreen,
      navigationOptions: {
        //  headerTitle: 'Category Meal',
      },
    },
    "Meal Details": MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavoriteMealScreen,
    MealDetails: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const tabSreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favourite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <MaterialIcons name="favorite" size={24} color={tabInfo.tintColor} />
      ),
      tabBarLabel: "My Favorite",
      tabBarColor: Colors.accentColor,
    },
  },
};
const MealsFavNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabSreenConfig, {
        activeColor: "white",
        inactiveColor: Colors.inactiveColor,
        shifting: true,
        barStyle: {
          //if shifting false tabbar colour goes lighter, barStyle property helps here.
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabSreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          inactiveTintColor: Colors.inactiveColor,
        },
      });

export default createAppContainer(MealsFavNavigator);
