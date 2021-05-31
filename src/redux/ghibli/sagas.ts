import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
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
      yield put(
        messageHandlerSet({ message: 'Success', type: 'success', description: 'Check redux panel for the list!' }),
      );
    } else {
      yield put(getAllFilmsFailed());
      yield put(messageHandlerSet({ message: filmsRes?.message, type: 'error', description: 'No films found!' }));
    }
  } catch (err) {
    yield put(getAllFilmsFailed());
    yield put(messageHandlerSet({ message: err?.message, type: 'error', description: 'No films found!' }));
  }
}

function* artworkSaga() {
  yield takeLatest(getAllFilmsRequest.type, getAllFilmsSaga);
}

export default artworkSaga;
