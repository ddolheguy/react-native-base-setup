import { Screen } from 'app/config';
import navigationService from 'app/services/navigationService';
import { put, takeLatest } from 'redux-saga/effects';
import { LoginRequest, User } from 'types/interface';
import { AuthenticationActions, onLogin } from '../authenticationAction';

function* validateLogin(action: AuthenticationActions) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const credentials = action.payload as LoginRequest;

    // Todo: Integrate with an API to validate credentials
    // I would write a separate service using Axios in a service layer.

    const mockUser: User = {
      id: 1,
      firstName: 'David',
    };

    yield put(onLogin.success(mockUser));
    navigationService.navigate(Screen.home);
  } catch (ex) {
    yield put(onLogin.failure(ex));
  }
}

export function* validateLoginSaga() {
  yield takeLatest([onLogin.request], validateLogin);
}
