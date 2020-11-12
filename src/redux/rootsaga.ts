import { all, call, spawn } from 'redux-saga/effects';
import filmsRootSaga from 'redux/ghibli/sagas';

function* rootSaga() {
  const sagas = [filmsRootSaga];

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

export default rootSaga;
