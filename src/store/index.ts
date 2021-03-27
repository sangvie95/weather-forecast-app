import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer as weather } from '../reducers/weather';

const rootReducer = combineReducers({
  weather,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
