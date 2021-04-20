import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      //determine whether the toggled meal is in the favoriteMeals array
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (existingIndex >= 0) {  //meal is currently a favorite, need to remove it
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {  //meal is not currently a favorite, need to add it
        const newMeal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(newMeal) };
      }
    default:
      return state;
  }
};

export default mealsReducer;