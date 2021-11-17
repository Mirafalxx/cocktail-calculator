import ingredientSlice from '../slices/ingredientSlice';
export const {
  fetchIngredientsRequest,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
  fetchSingleIngredientRequest,
  fetchSingleIngredientSuccess,
  fetchSingleIngredientFailure,
} = ingredientSlice.actions;
