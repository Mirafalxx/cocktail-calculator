import { combineReducers } from 'redux';
import cocktailSlice from './slices/cocktailSlice';
import ingredientSlice from './slices/ingredientSlice';

const rootReducer = combineReducers({
  cocktails: cocktailSlice.reducer,
  ingredients: ingredientSlice.reducer,
});

export default rootReducer;
