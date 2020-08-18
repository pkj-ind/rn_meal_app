import { TOGGLE_FAVORITE, SET_FILTERS } from "./types";

export const toggleFavorite = (mealId) => ({
  type: TOGGLE_FAVORITE,
  mealId: mealId,
});

export const setFilters = (filterSettings)=>{
   return  {type:SET_FILTERS,filters:filterSettings}

    
}