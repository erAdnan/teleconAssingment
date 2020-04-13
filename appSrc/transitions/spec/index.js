import { Animated, Easing } from 'react-native';

export const cutSpec = {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
};

export const fadeSpec = {
    duration: 500,
    timing: Animated.timing,
    easing: Easing.inOut(Easing.quad)
};
