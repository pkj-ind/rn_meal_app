import { createStackNavigator } from "react-navigation-stack"; // react navigator 4
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from '../constants/Colors';
import {Platform} from "react-native";

const MealsNavigator = createStackNavigator(
    {
    Categories : CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen,
        navigationOptions : {
            title: 'Category Meal',
            headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
          }
    },
    "Meal Details": MealDetailScreen, 
    }
)

export default createAppContainer(MealsNavigator)