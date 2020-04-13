import { Component } from 'react';
import { BackHandler, Platform } from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../services/navigationService';

export default class BackButtonHandler extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    componentDidMount() {
        if (Platform.OS === 'ios') return;

        BackHandler.addEventListener('hardwareBackPress', () => {
            return NavigationService.handleAndroidBackButtonPress();
        });
    }

    componentWillUnmount() {
        if (Platform.OS === 'ios') return;

        BackHandler.removeEventListener('hardwareBackPress', undefined);
    }

    render() {
        return this.props.children;
    }
}
