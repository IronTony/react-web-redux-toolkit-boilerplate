import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerReducer } from './connectedRoutes';
import counter from './counter/reducers';
import { allFilmsReducer } from './ghibli/reducers';
import messageHandler from './messageHandler/reducers';

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
  router: routerReducer, // to fix CombineState and type incompatibility
};

const persistedRootReducer = persistCombineReducers(persistConfig, allReducers);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
