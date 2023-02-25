import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import splash from '../../screens/auth/splash';
import login from '../../screens/auth/login';
import signup from '../../screens/auth/signup';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}
    >
      <Stack.Screen name="Splash" component={splash} />
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Signup" component={signup} />
    </Stack.Navigator>
  );
}

export {AuthStack};
