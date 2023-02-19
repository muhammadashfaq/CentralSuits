import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {
  AppStack,
  PropertiesStack,
  ReportsStack,
  MoreStack,
} from '../stacks/homestack';
import {appImages, colors} from '../../utils';

const Tab = createBottomTabNavigator();

export const BottomTabs = ({}) => {
  const getTabBarVisibility = route => {
    console.log('[Route]', route);
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['ConversationScreen']; // put here name of screen where you want to hide tabBar
    return hideOnScreens.indexOf(routeName) <= -1;
  };

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}
      options={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
      })}
      //tabBar={props => <BottomTab {...props} />}
    >
      <Tab.Screen
        component={AppStack}
        name={'Dashboard'}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Image
              source={appImages.dashboardIcon}
              style={{tintColor: color, width: 23, height: 23}}
            />
          ),
        }}
      />
      <Tab.Screen
        component={PropertiesStack}
        name={'Properties'}
        options={{
          tabBarLabel: 'Properties',
          tabBarIcon: ({color, size}) => (
            <Image
              source={appImages.propertiesIcon}
              style={{tintColor: color, width: 23, height: 23}}
            />
          ),
        }}
      />
      <Tab.Screen
        component={ReportsStack}
        name={'Reports'}
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({color, size}) => (
            <Image
              source={appImages.reportsIcon}
              style={{tintColor: color, width: 23, height: 23}}
            />
          ),
        }}
      />
      <Tab.Screen
        component={MoreStack}
        name={'More'}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <Image
              source={appImages.moreIcon}
              style={{tintColor: color, width: 23, height: 23}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
