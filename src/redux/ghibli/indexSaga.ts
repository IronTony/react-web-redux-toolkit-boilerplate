import { all, call, spawn } from 'redux-saga/effects';
import filmSaga from './sagas';

function* filmsRootSaga() {
  const sagas = [filmSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
}

export default filmsRootSaga;
