import { createStackNavigator } from "react-navigation-stack"; // react navigator 4
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";

const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeal: {
        screen: CategoryMealScreen
    },
    "Meal Details": MealDetailScreen,
})

export default createAppContainer(MealsNavigator)