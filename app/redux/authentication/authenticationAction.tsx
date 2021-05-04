import { LoginRequest, User } from 'types/interface';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';

export const onLogin = createAsyncAction(
  'authentication/ON_LOGIN_REQUEST',
  'authentication/ON_LOGIN_SUCCESS',
  'authentication/ON_LOGIN_FAILURE',
)<LoginRequest, User, Error>();

export const onLogout = createAction('authentication/ON_LOGOUT')<void>();

export type AuthenticationActions = ActionType<
  typeof onLogin | typeof onLogout
>;
