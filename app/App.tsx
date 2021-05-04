import './i18n/i18n';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from './navigation';
import { configureStore } from './redux/store';

const { persistor, store } = configureStore();

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);
