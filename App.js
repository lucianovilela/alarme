import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StateProvider } from './components/StateProvider';
import { Provider as PaperProvider , DefaultTheme} from 'react-native-paper';

import Home from './pages/Home';

import { NavigationContainer } from '@react-navigation/native';


const blueTheme = {
  ...DefaultTheme,
   fonts: {
    ...DefaultTheme.fonts, 
  },
  colors: {
    ...DefaultTheme.colors,
    primary: '#5a5afa', // Sets the primary color
    accent: '#fafafa', // Sets the accent color
    text: 'darkgray',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <StateProvider>
        <PaperProvider theme={blueTheme}>
          <Home />
        </PaperProvider>
      </StateProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
