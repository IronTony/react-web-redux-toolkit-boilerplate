import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'redux/reducers';

const counterSelector = (state: RootState) => state.counter;

export const counterInfo = createSelector(counterSelector, (counterState) => counterState.number);
