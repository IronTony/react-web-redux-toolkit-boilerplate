import { createSelector } from '@reduxjs/toolkit';
import { uniqBy } from 'lodash';
import type { RootState } from 'redux/reducers';

const allFilmsSelector = (state: RootState) => state.films;
export const allFilmsLoading = createSelector(allFilmsSelector, (filmsState) => filmsState.loading);
export const allFilms = createSelector(allFilmsSelector, (filmsState) => uniqBy(filmsState.films, 'id'));
