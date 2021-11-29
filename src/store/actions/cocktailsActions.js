import cocktailSlice from '../slices/cocktailSlice';
export const {
  fetchCocktailsFailure,
  fetchCocktailsRequest,
  fetchCocktailsSuccess,
  fetchSingleCocktailRequest,
  fetchSingleCocktailSuccess,
  fetchSingleCocktailFailure,
} = cocktailSlice.actions;
