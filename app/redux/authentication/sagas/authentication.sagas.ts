import { all } from 'redux-saga/effects';
import { validateLoginSaga } from './validateLogin.sagas';

export function* authenticationSaga() {
  yield all([validateLoginSaga()]);
}
