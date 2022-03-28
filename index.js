import React from "react";
import { AppRegistry } from "react-native";
import { PersistGate } from "redux-persist/lib/integration/react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { name as appName } from "./app.json";

import Home from "./src/pages/Home";
import { store, persistor } from "./src/store";

import { fonts } from "./src/styles/theme.json";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    ios: fonts,
    android: fonts,
  }),
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <Home />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
