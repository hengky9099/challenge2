// In App.js in a new project

import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './routers/Router';
import SplashScreen from 'react-native-splash-screen';

function App() {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>

  );
}

export default App;