import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LoginScreen from "./src/screens/LoginScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";

/* const queryClient = new QueryClient(
   {
    defaultOptions: {
      queries: {
        retry: 1
      }
    }
  }
) */
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        {/* <LoginScreen /> */}
        {/* <TermsScreen /> */}
        <StarshipFeedScreen />
      </PaperProvider>
    </QueryClientProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
