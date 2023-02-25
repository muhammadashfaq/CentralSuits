import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../../screens/app/dashboard';
import properties from '../../screens/app/properties';
import reports from '../../screens/app/reports';
import more from '../../screens/app/more';
import propertyDetail from '../../screens/app/propertyDetail';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={home} />
    </Stack.Navigator>
  );
}

function PropertiesStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Properties'}
    >
      <Stack.Screen name="Properties" component={properties} />
      <Stack.Screen name="PropertyDetail" component={propertyDetail} />
    </Stack.Navigator>
  );
}

function ReportsStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Reports'}
    >
      <Stack.Screen name="Reports" component={reports} />
    </Stack.Navigator>
  );
}

function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'More'}
    >
      <Stack.Screen name="More" component={more} />
    </Stack.Navigator>
  );
}

export { AppStack, PropertiesStack, ReportsStack, MoreStack };
