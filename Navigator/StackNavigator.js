import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import {Platform} from 'react-native';
import BottomNavigation from '../Navigator/BottomNavigator';
import Dashboard from '../Screens/Dashboard';
import EditProfile from '../Screens/EditProfile';
import Sign from '../Screens/Sign';

const Stack = createStackNavigator();

const StackNavigator = props => {
  //console.log('route===', props.isLogedin);

  return (
    <Stack.Navigator
      //initialRouteName={'BottomNavigation'}
      initialRouteName={'Sign'}
      screenOptions={{
        gestureEnabled: Platform.OS == 'android' ? false : true,
        headerShown: false,
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
