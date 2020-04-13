import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import images from '../../../images';
import { appColor } from '../../../constants/appColors';

export const SPLASH_SCREEN_DURATION = 1500;

class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { wrapperStyles, splashDuration, animationState } = this.props;

        return (
            <Animatable.View
                {...animations.viewContainer({ delay: splashDuration })}
                style={[styles.viewContainer, wrapperStyles]}
            >
                <Animatable.Text
                    style={styles.imageContainer}
                    {...animations.imageContainer[animationState]}
                >
                    Todo App
                </Animatable.Text>
            </Animatable.View>
        );
    }
}

SplashScreen.propTypes = {
    wrapperStyles: PropTypes.shape({}),
    splashDuration: PropTypes.number,
    animationState: PropTypes.string
};

SplashScreen.defaultProps = {
    wrapperStyles: {},
    splashDuration: 1500,
    animationState: 'enter'
};

export const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: appColor.mustardDark,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: 237,
        height: 48
    },
    imageContainer: {
        position: 'absolute',
        zIndex: 1,
        color: 'white',
        fontSize: 20
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        overflow: 'hidden'
    },
});

export const animations = {
    viewContainer: ({ delay }) => ({
        animation: 'slideOffStageDown',
        delay,
        duration: 350,
        useNativeDriver: true,
        easing: 'ease-in-expo'
    }),
    rotator: {
        useNativeDriver: true,
        animation: 'fadePanIn',
        duration: 750,
        easing: 'ease-out-quint'
    },
    rotatorContainer: {
        useNativeDriver: true,
        animation: {
            from: {
                transform: [{ rotate: '0deg' }]
            },
            to: {
                transform: [{ rotate: '10deg' }]
            }
        },
        duration: 1800,
        easing: 'linear'
    },
    imageContainer: {
        enter: {
            useNativeDriver: true,
            animation: 'slightFadeInDown',
            duration: 800,
            easing: 'ease-out-quint'
        },
        leave: {
            useNativeDriver: true,
            animation: 'slideOffStageUp',
            duration: 300,
            easing: 'ease-in-expo'
        }
    }
};

export default SplashScreen;
