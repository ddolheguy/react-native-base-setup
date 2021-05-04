import { Selector } from 'reselect';
import { Maybe, User } from 'types/interface';
import { RootState } from '../types';

const getUser: Selector<RootState, Maybe<User>> = ({
  authentication,
}: RootState) =>
  authentication.state === 'SUCCESS' ? authentication.data : undefined;

export const AuthenticationSelector = {
  getUser,
};
