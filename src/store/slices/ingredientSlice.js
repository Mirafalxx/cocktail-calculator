import { createSlice } from '@reduxjs/toolkit';

const name = 'ingredients';

const ingredientSlice = createSlice({
  name,
  initialState: {
    ingredients: [],
    singleIngredient: [],
    createEventIngredientsLoading: false,
    ingredientsLoading: false,
    singleIngredientsLoading: false,
  },
  reducers: {
    fetchIngredientsRequest: (state) => {
      state.ingredientsLoading = true;
    },
    // updateIngredientRequest: (state, { payload: ingredients }) => {
    // state.singleIngredient
    // },
    fetchIngredientsSuccess: (state, { payload: ingredients }) => {
      state.ingredientsLoading = false;
      state.ingredients = ingredients;
    },
    fetchIngredientsFailure: (state) => {
      state.ingredientsLoading = true;
    },
    fetchSingleIngredientRequest: (state) => {
      state.singleIngredient = false;
    },
    fetchSingleIngredientSuccess: (state, { payload: singleIngredient }) => {
      state.singleIngredient = false;
      state.singleIngredient = singleIngredient;
    },
    fetchSingleIngredientFailure: (state) => {
      state.singleIngredient = false;
    },
  },
});

export default ingredientSlice;
