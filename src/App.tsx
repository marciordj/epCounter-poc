import React from 'react';

import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import Home from './Screens/Home';
import theme from './themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
