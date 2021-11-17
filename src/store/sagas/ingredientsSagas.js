import { put, takeEvery } from 'redux-saga/effects';
import axiosRequest from '../../axiosRequest';

import {
  fetchIngredientsRequest,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
  fetchSingleIngredientRequest,
  fetchSingleIngredientSuccess,
  fetchSingleIngredientFailure,
} from '../actions/ingredientsActions';

export function* fetchIngredients() {
  const fetchedData = [];
  try {
    const response = yield axiosRequest.get('/ingredients.json').then((res) => res);
    if (response.data !== null) {
      for (let key in response.data) {
        fetchedData.unshift({
          ...response.data[key],
          id: key,
        });
      }
    }
    yield put(fetchIngredientsSuccess(fetchedData));
  } catch (e) {
    yield put(fetchIngredientsFailure(fetchedData));
  }
}

export function* fetchSingleIngredient({ payload: id }) {
  const fetchedData = [];
  try {
    const response = yield axiosRequest.get('/ingredients/' + id + '.json').then((res) => res);
    // console.log('response', response.data);
    if (response.data !== null) {
      yield put(fetchSingleIngredientSuccess(response.data));
    } else console.log('musor');
  } catch (e) {
    yield put(fetchSingleIngredientFailure(fetchedData));
  }
}

const ingredientsSagas = [
  takeEvery(fetchIngredientsRequest, fetchIngredients),
  takeEvery(fetchSingleIngredientRequest, fetchSingleIngredient),
];

export default ingredientsSagas;
