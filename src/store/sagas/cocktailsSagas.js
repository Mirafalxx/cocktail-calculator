import { put, takeEvery } from 'redux-saga/effects';
import axiosRequest from '../../axiosRequest';

import {
  fetchCocktailsFailure,
  fetchCocktailsRequest,
  fetchCocktailsSuccess,
  fetchSingleCocktailFailure,
  fetchSingleCocktailRequest,
  fetchSingleCocktailSuccess,
} from '../actions/cocktailsActions';

export function* fetchCocktails() {
  const fetchedData = [];
  try {
    const response = yield axiosRequest.get('/cocktails.json').then((res) => res);
    if (response.data !== null) {
      for (let key in response.data) {
        fetchedData.unshift({
          ...response.data[key],
          id: key,
        });
      }
    }
    yield put(fetchCocktailsSuccess(fetchedData));
  } catch (e) {
    yield put(fetchCocktailsFailure(e));
  }
}
export function* fetchSingleCocktail({ payload: cocktailId }) {
  try {
    const response = yield axiosRequest.get(`/cocktails/${cocktailId}.json`).then((res) => res);
    yield put(fetchSingleCocktailSuccess(response.data));
  } catch (e) {
    yield put(fetchSingleCocktailFailure(e));
  }
}

const cocktailsSagas = [
  takeEvery(fetchCocktailsRequest, fetchCocktails),
  takeEvery(fetchSingleCocktailRequest, fetchSingleCocktail),
];

export default cocktailsSagas;
