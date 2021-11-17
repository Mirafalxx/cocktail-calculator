import { put, takeEvery } from 'redux-saga/effects';
import axiosRequest from '../../axiosRequest';

import { fetchCocktailsFailure, fetchCocktailsRequest, fetchCocktailsSuccess } from '../actions/cocktailsActions';

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

const cocktailsSagas = [takeEvery(fetchCocktailsRequest, fetchCocktails)];

export default cocktailsSagas;
