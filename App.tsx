/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import BottomNavigator from '@/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import StatusBarView from '@/components/UI/StatusBarView';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistedStore } from '@/store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <StatusBarView />
          <BottomNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>


  );
};

export default App;
