import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authentication from './authentication/authenticationReducer';

const persistKey = 'example-app';
const basePersistConfig = {
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  authentication: persistReducer(
    { key: `${persistKey}:authentication`, ...basePersistConfig },
    authentication,
  ),
});
