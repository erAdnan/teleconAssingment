import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import createStore from '../store';
import BackButtonHandler from '../navigation/backButtonHandler';
import AppNavigation from '../navigation/appNavigation';
import AppGate from './appGate';
import { appColor } from '../constants/appColors';

import '../accessibility/setFontSizeMultipliers';
import '../transitions/definitions/definitions';

export const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxNetworkProvider>
                    <BackButtonHandler>
                        <AppGate store={store}>
                            <StatusBar
                                backgroundColor={appColor.cayenneMain}
                                barStyle="light-content"
                            />
                            <AppNavigation />
                        </AppGate>
                    </BackButtonHandler>
                </ReduxNetworkProvider>
            </Provider>
        );
    }
}

export default App;
