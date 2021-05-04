import { DateTime } from 'luxon';

export type EntityState<T> =
  | {
      state: 'NONE';
    }
  | {
      state: 'PENDING';
    }
  | {
      state: 'SUCCESS';
      data: T;
      lastUpdated: DateTime;
    }
  | {
      state: 'FAILURE';
      error: Error;
    };
