import LoginScreen from './src/screens/LoginScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

function App() {
  return (
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;