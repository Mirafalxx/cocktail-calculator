import { createSlice } from '@reduxjs/toolkit';

const name = 'cocktails';

const cocktailSlice = createSlice({
  name,
  initialState: {
    cocktailList: [],
    createCocktailsLoading: false,
  },
  reducers: {
    fetchCocktailsRequest: (state) => {
      state.createCocktailsLoading = true;
    },
    fetchCocktailsSuccess: (state, { payload: cocktailList }) => {
      state.createCocktailsLoading = false;
      state.cocktailList = cocktailList;
    },
    fetchCocktailsFailure: (state) => {
      state.createCocktailsLoading = true;
    },
  },
});

export default cocktailSlice;
