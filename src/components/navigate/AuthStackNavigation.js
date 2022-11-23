import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '~/constants';

const Stack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
      }}>
      {screens.navigateAuth.map(screen => (
        <Stack.Screen
          name={screen.name}
          component={screen.component}
          key={screen.name}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
