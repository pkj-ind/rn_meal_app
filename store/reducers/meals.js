import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/types";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritMeals: [],
};
const mealReducers = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_FAVORITE: {
      const existingIndex = state.favoritMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoritMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoritMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoritMeals: state.favoritMeals.concat(meal) };
      }
    }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };

    default:
      return state;
  }
};

export default mealReducers;
