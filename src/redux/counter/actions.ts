import { createAction } from '@reduxjs/toolkit';

export const incrementRequest = createAction('ACTION/INCREMENT');
export const decrementRequest = createAction('ACTION/DECREMENT');
export const resetRequest = createAction('ACTION/RESET');
