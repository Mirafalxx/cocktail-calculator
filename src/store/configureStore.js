import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);
export default store;
