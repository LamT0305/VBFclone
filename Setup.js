import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Store from '~/store';
import App from './App';
import SplashScreen from 'react-native-splash-screen';

const Setup = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

export default Setup;
