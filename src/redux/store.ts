import { configureStore, getDefaultMiddleware, Reducer } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { history } from 'routes/history';
import reducers from './reducers';
import rootSaga from './rootsaga';

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

// Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    // To avoid reduxjs/toolkit with persist intergration
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  routerMiddleware(history),
  sagaMiddleware,
];

// Store
export type RootState = ReturnType<typeof persistedRootReducer>;

const store = configureStore({
  reducer: persistedRootReducer,
  middleware,
  devTools:
    process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
