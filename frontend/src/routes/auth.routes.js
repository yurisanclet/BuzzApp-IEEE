import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

const { Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes() {
  return (
      <Navigator screenOptions={{ headerShown: false}}>
          <Screen name="Home" component={Home}/>
          <Screen name="Login" component={Login}/>
          <Screen name="Register"  component={Register}/>
      </Navigator>
  );
}
