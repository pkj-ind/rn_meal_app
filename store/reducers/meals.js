import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/types";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritMeals: [],
};
const mealReducers = (state = initialState, action) => {
  const { type, mealId } = action;

  switch (type) {
    case TOGGLE_FAVORITE: {
      const existingIndex = state.favoritMeals.findIndex(
        (meal) => meal.id === mealId
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

    default:
      return state;
  }
};

export default mealReducers;
