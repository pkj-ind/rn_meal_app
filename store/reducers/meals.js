import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritMeals: [],
};
const mealReducers = (state = initialState, action) => {
    return state
};

export default mealReducers;
