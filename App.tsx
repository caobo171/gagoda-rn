/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StatusBarView from '@/components/UI/StatusBarView';
import { PersistGate } from 'redux-persist/integration/react'
import store from '@/store/store';
import { Provider } from 'react-redux';
import ThemeWrapper from '@/store/theme/ThemeWrapper';
import StackNavigator from '@/navigation/StackNavigator';


console.disableYellowBox = true;

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <PersistGate persistor={persistedStore}> */}
          <ThemeWrapper>
            <StatusBarView />
            <StackNavigator />
          </ThemeWrapper>
        {/* </PersistGate> */}
      </Provider>
    </NavigationContainer>


  );
};

export default App;
