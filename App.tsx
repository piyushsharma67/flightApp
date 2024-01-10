import React from 'react'
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import AppNavigationIndex from './src/navigation';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2196f5',
      secondary: 'yellow',
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppNavigationIndex />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

export default App