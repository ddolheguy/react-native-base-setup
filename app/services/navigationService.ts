import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import { Screen } from 'app/config';

let navigator: NavigationContainerRef;

export const setTopLevelNavigator = (navigatorRef: NavigationContainerRef) =>
  (navigator = navigatorRef);

export const getTopLevelNavigator = () => navigator;

export const navigate = (name: Screen, params?: object) => {
  if (!navigator) {
    return;
  }

  return navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
};
export const reset = (screens: string[]) => {
  return navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: screens.map((s) => ({ name: s })),
    }),
  );
};

export const goBack = () => {
  return navigator?.dispatch(CommonActions.goBack());
};

export default {
  navigate,
  goBack,
  reset,
};
