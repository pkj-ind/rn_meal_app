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
import FilterScreen from "../screens/FilterScreen";

import Colors from "../constants/Colors";
import { Platform, Text } from "react-native";

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle:{
    fontFamily:"open-sans-bold"
  },
  headerBackTitleStyle:{
    fontFamily: "open-sans"
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
      tabBarLabel:Platform.OS === "android" ? <Text style={{fontFamily:"open-sans-bold"}}> Meal</Text> : "Meal"
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
          labelStyle:{fontFamily:"open-sans-bold"},
          inactiveTintColor: Colors.inactiveColor,
        },
      });
// Filter Navigator stack have only one screen
const FilterNavigator = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    // navigationOptions:{
    // drawerLabel:"Filter!!"
    // },
    defaultNavigationOptions: defaultStackNavOption,
  }
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily:'open-sans-bold'
      }
    },
  }
);

export default createAppContainer(MainNavigator);
