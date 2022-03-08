import React from 'react';
import {AppRegistry} from 'react-native';
import Home from './src/pages/Home';
import {name as appName} from './app.json';

import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';
import { fonts } from './src/styles/theme.json'

const theme = {
    ...DefaultTheme,
    fonts: configureFonts({
        ios: fonts,
        android: fonts ,
    })
}

const App = () => {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <Home />
            </PaperProvider>
        </StoreProvider>
    )
}

AppRegistry.registerComponent(appName, () => App);
