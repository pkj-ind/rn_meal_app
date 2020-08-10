import { createStackNavigator } from "react-navigation-stack"; // react navigator 4
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteMealScreen from "../screens/FavoriteMealScreen";

import Colors from "../constants/Colors";
import { Platform } from "react-native";

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
    defaultNavigationOptions: {
      headerTitle: "Meal Application",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const MealsFavNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
    },
    Favourite: FavoriteMealScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavNavigator);
