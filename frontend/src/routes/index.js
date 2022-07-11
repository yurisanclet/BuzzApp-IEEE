import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthRoutes } from "./auth.routes";


export function Routes(props) {
  return (
      <NavigationContainer>
          <AuthRoutes/>
      </NavigationContainer>
  );
}

