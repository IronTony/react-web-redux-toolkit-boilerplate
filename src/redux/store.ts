import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
import { history } from 'routes/history';
import rootSaga from './rootsaga';
import persistedRootReducer from './reducers';

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
