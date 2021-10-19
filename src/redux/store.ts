import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore } from 'redux-persist';
import { history } from 'routes/history';
import rootSaga from './rootsaga';
import persistedRootReducer from './reducers';

// Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

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

sagaMiddleware.run(rootSaga);

export { store, persistor };
