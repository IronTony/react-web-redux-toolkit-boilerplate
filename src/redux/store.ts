import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistory, routerMiddleware } from './connectedRoutes';
import persistedRootReducer from './reducers';
import rootSaga from './rootsaga';

// Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware];

// Store
const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
  devTools:
    process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__({ name: 'Starter-App' }), // You can customize the Starter-App name to identify it in the Redux panel
});

const persistor = persistStore(store);

const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);

export { history, store, persistor };
