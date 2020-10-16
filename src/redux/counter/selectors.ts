import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const counterSelector = (state: RootState) => state.counter;

export const counterInfo = createSelector(counterSelector, (counterState) => counterState.number);
