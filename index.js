/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/pages/Home';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
