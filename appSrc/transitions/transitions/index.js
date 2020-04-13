export const fadeTransition = props => {
    const { position, scene } = props;

    const index = scene.index;

    const translateX = 0;
    const translateY = 0;

    const opacity = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0]
    });

    return {
        opacity,
        transform: [{ translateX }, { translateY }]
    };
};
