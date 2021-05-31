import { Reducer } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { allFilmsReducer } from './ghibli/reducers';
import messageHandler from './messageHandler/reducers';
import { history } from 'routes/history';
import counter from './counter/reducers';

const reducers = {
  counter,
  films: allFilmsReducer,
  messages: messageHandler,
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: ['router'],
};

// Reducers
const allReducers = {
  ...reducers,
  router: connectRouter(history) as Reducer, // to fix CombineState and type incompatibility
};

const persistedRootReducer = persistCombineReducers(persistConfig, allReducers);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
