const DynamicDefinitions = {
    fadeAndSlideFrom: ({ x = 0, y = 0 }) => ({
        from: {
            opacity: 0,
            transform: [{ translateX: x, translateY: y }]
        },
        to: {
            opacity: 1,
            transform: [{ translateX: 0, translateY: 0 }]
        }
    }),
    fadeAndSlideTo: ({ x = 0, y = 0 }) => ({
        from: {
            opacity: 0,
            transform: [{ translateX: 0, translateY: 0 }]
        },
        to: {
            opacity: 1,
            transform: [{ translateX: x, translateY: y }]
        }
    }),
    slideFrom: ({ x = 0, y = 0 }) => ({
        from: {
            transform: [{ translateX: x, translateY: y }]
        },
        to: {
            transform: [{ translateX: 0, translateY: 0 }]
        }
    }),
    slideTo: ({ x = 0, y = 0 }) => ({
        from: {
            transform: [{ translateX: 0, translateY: 0 }]
        },
        to: {
            transform: [{ translateX: x, translateY: y }]
        }
    })
};

export default DynamicDefinitions;
