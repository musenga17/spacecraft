import LoginScreen from './src/screens/LoginScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";

function App() {
  return (
    <PaperProvider>
      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}
      <StarshipFeedScreen />
    </PaperProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;