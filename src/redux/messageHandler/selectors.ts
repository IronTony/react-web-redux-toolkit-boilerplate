import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';

const messageHandlerSelector = (state: RootState) => state.messages;

export const messageHandlerFullInfo = createSelector(messageHandlerSelector, (messageState) => messageState);
