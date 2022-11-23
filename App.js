import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/components/navigate/Navigation';
import {ToastProvider} from 'react-native-toast-notifications';


const App = () => {
  return (
    <ToastProvider>
      <Navigation />
    </ToastProvider>
  );
};

export default App;
