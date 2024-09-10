import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../assets/res/style/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import DeviceDetail from '../Screens/DeviceDetail';
import Account from '../Screens/Account';

const Tab = createBottomTabNavigator();

function BottomNavigation(props) {
  const {navigation} = props;
  let [Open, setOpen] = useState(true);
  const [CurrentScreen, setCurrentScreen] = useState('');

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      // activeColor={colors.tabtext}
      //backgroundColor={colors.themedarkgreen}
      //barStyle={{backgroundColor: colors.red}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: colors.themedarkgreen,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        backgroundColor={colors.buttoncolor}
        options={{
          activeTintColor: colors.white,
          tabBarLabelStyle: {color: colors.themegreenblack},
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.iconfocusviewstyle : ''}>
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? colors.iconcolor : colors.iconcolor}
                size={focused ? 30 : 30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Device Detail"
        component={DeviceDetail}
        options={{
          tabBarLabelStyle: {color: colors.themegreenblack},
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.iconfocusviewstyle : ''}>
              <MaterialCommunityIcons
                name={focused ? 'information' : 'information-outline'}
                size={focused ? 30 : 30}
                color={focused ? colors.iconcolor : colors.iconcolor}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          // tabBarBadge: 696,
          tabBarLabelStyle: {color: colors.themegreenblack},
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.iconfocusviewstyle : ''}>
              <MaterialCommunityIcons
                name={focused ? 'account-circle' : 'account-circle-outline'}
                size={focused ? 30 : 30}
                color={focused ? colors.iconcolor : colors.iconcolor}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarLabel: {
    // fontSize: fontSizes.verySmall,
  },
  tabBarLabelActive: {
    color: colors.tabtext,
  },
  tabBarItemStyle: {},
  tabBarIconStyle: {
    // fontSize: fontSizes.xxbig,
    textAlign: 'center',
  },
  plushiconstyle: {
    marginTop: '-10%',
    marginBottom: '-20%',
    elevation: 5,
    shadowColor: colors.buttoncolor,
    fontSize: 50,
  },
  iconfocusviewstyle: {
    justifyContent: 'center',
    elevation: 15,
    shadowColor: colors.themedarkgreen,
  },
});
