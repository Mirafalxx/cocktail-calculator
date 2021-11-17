import { all } from 'redux-saga/effects';
import history from '../history';
import cocktailsSagas from './sagas/cocktailsSagas';
import historySagas from './sagas/historySagas';
import ingredientsSagas from './sagas/ingredientsSagas';

export default function* rootSaga() {
  yield all([...historySagas(history), ...ingredientsSagas, ...cocktailsSagas]);
}
