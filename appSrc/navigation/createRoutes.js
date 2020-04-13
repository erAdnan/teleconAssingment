import { Platform } from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack';

import { defaultNavigationOptions } from './navigationOptions';
import { fadeSpec } from '../transitions/spec';
import { fadeTransition } from '../transitions/transitions';
// Screens
import EventsScreen from '../containers/screens/HomeScreen';
import DetailScreen from '../containers/screens/DetailScreen';
//modals
import AddNameModal from '../containers/screens/modal/addNameModal';

import 'react-native-gesture-handler';

export default () => {

    const HomeStack = createStackNavigator(
        {
            EventsScreen,
            DetailScreen
        },
        {
            initialRouteName: 'EventsScreen',
            defaultNavigationOptions,
            gesturesEnabled: false,
            transitionConfig: (transitionProps, prevTransitionProps, isModal) => {
                const isNavigatingBack = transitionProps.index < (prevTransitionProps || {}).index;

                const {
                    scene: {
                        route: { params: { transition } = {} }
                    }
                } = isNavigatingBack ? prevTransitionProps : transitionProps;

                return (
                    {
                        modal:
                            Platform.OS === 'ios' &&
                            StackViewTransitionConfigs.ModalSlideFromBottomIOS,
                        material: Platform.OS === 'ios' &&
                            !isNavigatingBack && {
                                screenInterpolator: fadeTransition,
                                transitionSpec: fadeSpec
                            }
                    }[transition] ||
                    StackViewTransitionConfigs.defaultTransitionConfig(
                        transitionProps,
                        prevTransitionProps,
                        isModal
                    )
                );
            }
        }
    );

    const App = createSwitchNavigator(
        {
            HomeStack
        },
        {
            initialRouteName: 'HomeStack'
        }
    );

    const Modals = createSwitchNavigator({
        AddNameModal,
    }, {
        cardStyle: {
            opacity: 1
        }
    });

    return createAppContainer(
        createStackNavigator(
            { App, Modals },
            {
                headerMode: 'none',
                mode: 'modal',
                transparentCard: true,
            }
        )
    );
};
