import { DeepReadonly } from 'types/interface';
import { ActionType, StateType } from 'typesafe-actions';

export type RootState = DeepReadonly<
  StateType<typeof import('./rootReducer').rootReducer>
>;

export type RootAction = ActionType<typeof import('./rootActions').default>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./rootActions').default>;
  }
}
