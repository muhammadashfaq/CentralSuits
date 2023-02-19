import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStack} from './stacks/authstack';
import {BottomTabs} from './bottom/main-tabs';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Auth'} component={AuthStack} />
        <Stack.Screen name={'App'} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
