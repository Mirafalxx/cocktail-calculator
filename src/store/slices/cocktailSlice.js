import { createSlice } from '@reduxjs/toolkit';

const name = 'cocktails';

const cocktailSlice = createSlice({
  name,
  initialState: {
    cocktailList: [],
    singleCocktail: [],
    cocktailsLoading: false,
    singleCocktailLoading: false,
  },
  reducers: {
    fetchCocktailsRequest: (state) => {
      state.cocktailsLoading = true;
    },
    fetchCocktailsSuccess: (state, { payload: cocktailList }) => {
      state.cocktailsLoading = false;
      state.cocktailList = cocktailList;
    },
    fetchCocktailsFailure: (state) => {
      state.cocktailsLoading = true;
    },
    fetchSingleCocktailRequest: (state) => {
      state.singleCocktailLoading = true;
    },
    fetchSingleCocktailSuccess: (state, { payload: singleCocktail }) => {
      state.singleCocktailLoading = false;
      state.singleCocktail = singleCocktail;
    },
    fetchSingleCocktailFailure: (state) => {
      state.singleCocktailLoading = true;
    },
  },
});

export default cocktailSlice;
