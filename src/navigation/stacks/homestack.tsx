import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from '../../screens/app/home';
import profile from '../../screens/app/profile';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Profile" component={profile} />
    </Stack.Navigator>
  );
}

export {AppStack};
