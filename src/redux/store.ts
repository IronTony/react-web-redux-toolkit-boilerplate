import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from './reducers';

// Reducers
const rootReducer = combineReducers(reducers);

// Middleware
const middleware = [...getDefaultMiddleware()];

// Store
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools:
    process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
