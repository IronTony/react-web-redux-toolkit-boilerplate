import { createReducer } from '@reduxjs/toolkit';
import { messageHandlerSet, messageHandlerReset } from './actions';

export interface IMessageHandler {
  type?: 'success' | 'error' | 'warning' | 'info' | undefined;
  description: string | undefined;
  message?: string | undefined;
}

const initialState: IMessageHandler = {
  type: undefined,
  description: undefined,
  message: undefined,
};

const errorsReducer = createReducer(initialState, {
  [messageHandlerSet.type]: (state, action) => {
    state.type = action.payload.type;
    state.description = action.payload.description;
    state.message = action.payload.message;
  },
  [messageHandlerReset.type]: (state) => {
    state.type = undefined;
    state.description = undefined;
    state.message = undefined;
  },
});

export default errorsReducer;
