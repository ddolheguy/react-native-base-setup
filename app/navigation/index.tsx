import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from 'app/config';
import { Authentication } from 'app/screens/Authentication/Authentication';
import { Home } from 'app/screens/Home/Home';
import { setTopLevelNavigator } from 'app/services/navigationService';
import React from 'react';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Screen.login} component={Authentication} />
    <Stack.Screen name={Screen.home} component={Home} />
  </Stack.Navigator>
);

export const AppContainer: React.FC = () => (
  <NavigationContainer
    ref={(navigatorRef) => {
      if (navigatorRef) {
        setTopLevelNavigator(navigatorRef);
      }
    }}>
    {MainStack()}
  </NavigationContainer>
);
