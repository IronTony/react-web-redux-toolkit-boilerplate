import { PayloadAction } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';
import { call, put, takeLatest } from 'redux-saga/effects';
import { messageHandlerSet } from 'redux/messageHandler/actions';
import { getAllFilmsFailed, getAllFilmsRequest, getAllFilmsSuccess } from './actions';
import * as FilmsAPI from './apiCall';
import { GetAllFilmsRequestPayload } from './types';

function* getAllFilmsSaga({ payload }: PayloadAction<GetAllFilmsRequestPayload>) {
  const { limit } = payload;

  try {
    const filmsRes = yield call(FilmsAPI.getAllFilms, { limit });

    if (!isEmpty(filmsRes)) {
      yield put(getAllFilmsSuccess(filmsRes));
      yield put(messageHandlerSet({ message: 'Check redux panel for the list!', type: 'success' }));
    } else {
      yield put(getAllFilmsFailed());
      yield put(messageHandlerSet({ message: filmsRes?.message, type: 'error' }));
    }
  } catch (err: any) {
    yield put(getAllFilmsFailed());
    yield put(messageHandlerSet({ message: err?.message, type: 'error' }));
  }
}

function* filmsSaga() {
  yield takeLatest(getAllFilmsRequest.type, getAllFilmsSaga);
}

export default filmsSaga;
