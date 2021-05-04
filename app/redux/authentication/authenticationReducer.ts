import { DateTime } from 'luxon';
import { DeepReadonly, User } from 'types/interface';
import { createReducer } from 'typesafe-actions';
import { EntityState } from '../entityState';
import {
  AuthenticationActions,
  onLogin,
  onLogout,
} from './authenticationAction';

export const defaultState: EntityState<User> = {
  state: 'NONE',
};

const reducer = createReducer<
  DeepReadonly<EntityState<User>>,
  AuthenticationActions
>(defaultState)
  .handleAction(onLogin.request, () => ({
    state: 'PENDING',
  }))
  .handleAction(onLogin.success, (state, action) => ({
    state: 'SUCCESS',
    data: action.payload,
    lastUpdated: DateTime.utc(),
  }))
  .handleAction(onLogin.failure, (state, action) => ({
    state: 'FAILURE',
    error: action.payload,
  }))
  .handleAction(onLogout, () => ({
    state: 'NONE',
  }));

export default reducer;
