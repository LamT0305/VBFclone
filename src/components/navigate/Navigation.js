import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './AuthStackNavigation';
import StackNavigation from './StackNavigation';
import {useAuth} from '~/hooks';
import {session} from '~/components/utils';

const Navigation = () => {
  const {isAuthenticated, handleAuth} = useAuth();
  useEffect(() => {
    const authenticated = async () => {
      try {
        const getJWT = await session.getData('jwt');
        if (getJWT) {
          await handleAuth(getJWT);
        }
        await handleAuth(null);
      } catch (e) {
        console.log(e);
      }
    };
    authenticated();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <StackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
