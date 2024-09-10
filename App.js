/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/Navigator/StackNavigator';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider} from 'react-redux';
import {configureStore} from './src/Store';
import 'react-native-devsettings';

function App() {
  const [IsLogedin, setIsLogedin] = useState(false);

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <MenuProvider>
          <StackNavigator isLogedin={IsLogedin} />
        </MenuProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
