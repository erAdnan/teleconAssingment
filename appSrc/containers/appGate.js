import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import RehydrationService from '../services/rehydrationService';
import SplashScreen, { SPLASH_SCREEN_DURATION } from './screens/splashScreen';

class AppGate extends Component {
    state = { initialized: false, displaySplash: false, splashDuration: 1500 };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initializeApp();
    }

    async initializeApp() {
        await Promise.all([
            // Reinitialize store state from storage
            RehydrationService.updateReducers(this.props.store)
        ]);

        this.setState({ displaySplash: true });

        // App is ready to be displayed
        setTimeout(() => {
            this.setState({ initialized: true });
        }, SPLASH_SCREEN_DURATION);
    }

    render() {
        return (
            <View style={{ alignSelf: 'stretch', flex: 1 }}>
                {this.state.displaySplash && (
                    <SplashScreen
                        wrapperStyles={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            zIndex: 5,
                            elevation: 5
                        }}
                        animationState={!this.state.initialized ? 'enter' : 'leave'}
                    />
                )}
                {this.state.initialized && this.props.children}
            </View>
        );
    }
}

AppGate.propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired
    }).isRequired
};

export default AppGate;
