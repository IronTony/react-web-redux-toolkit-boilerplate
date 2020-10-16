import { createReducer } from '@reduxjs/toolkit';
import { incrementRequest, decrementRequest, resetRequest } from './actions';

export interface ITodoState {
  number: number;
}

const initialState: ITodoState = {
  number: 0,
};

const counterReducer = createReducer(initialState, {
  [incrementRequest.type]: (state) => {
    state.number = state.number + 1;
  },
  [decrementRequest.type]: (state) => {
    state.number = state.number - 1;
  },
  [resetRequest.type]: () => initialState,
});

export default counterReducer;
