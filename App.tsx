import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MainScreen from './src/screens/MainScreen';

export type RootStackParamList = {
  Welcome: undefined;
  MainScreen: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
