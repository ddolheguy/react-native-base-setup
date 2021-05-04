import { SagaMiddleware } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { authenticationSaga } from './authentication/sagas';

function* rootSaga() {
  yield all([authenticationSaga()]);
}

export const registerSagas = (sagaMiddleware: SagaMiddleware) => {
  sagaMiddleware.run(rootSaga);
};
