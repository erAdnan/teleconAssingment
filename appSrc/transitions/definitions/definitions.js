import * as Animatable from 'react-native-animatable';
import metrics from '../../constants/metrics';

Animatable.initializeRegistryWithDefinitions({
    delay: {
        from: {},
        to: {}
    },
    hiddenDelay: {
        from: {
            opacity: 0
        },
        to: {
            opacity: 0
        }
    },
    fadeIn: {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },
    slightFadeInUp: {
        from: {
            opacity: 0,
            transform: [{ translateY: 60 }]
        },
        to: {
            opacity: 1,
            transform: [{ translateY: 0 }]
        }
    },
    slightFadeInDown: {
        from: {
            opacity: 0,
            transform: [{ translateY: -60 }]
        },
        to: {
            opacity: 1,
            transform: [{ translateY: 0 }]
        }
    },
    slightScaleFadeInUp: {
        from: {
            opacity: 0,
            transform: [{ translateY: 60, scale: 0.75 }]
        },
        to: {
            opacity: 1,
            transform: [{ translateY: 0, scale: 1 }]
        }
    },
    slightScaleFadeInDown: {
        from: {
            opacity: 0,
            transform: [{ translateY: -60, scale: 0.75 }]
        },
        to: {
            opacity: 1,
            transform: [{ translateY: 0, scale: 1 }]
        }
    },
    scaleIn: {
        from: {
            transform: [{ scale: 0.5 }]
        },
        to: {
            transform: [{ scale: 1 }]
        }
    },
    fadePanIn: {
        from: {
            opacity: 0,
            transform: [{ scale: 1.15 }]
        },
        to: {
            opacity: 1,
            transform: [{ scale: 1 }]
        }
    },
    slightFadeInRight: {
        from: {
            opacity: 0,
            transform: [{ translateX: 60 }]
        },
        to: {
            opacity: 1,
            transform: [{ translateX: 0 }]
        }
    },
    slightFadeOutUp: {
        from: {
            opacity: 1,
            transform: [{ translateY: 0 }]
        },
        to: {
            opacity: 0,
            transform: [{ translateY: -60 }]
        }
    },
    slightFadeOutDown: {
        from: {
            opacity: 1,
            transform: [{ translateY: 0 }]
        },
        to: {
            opacity: 0,
            transform: [{ translateY: 60 }]
        }
    },
    slideOffStageDown: {
        from: {
            transform: [{ translateY: 0 }]
        },
        to: {
            transform: [{ translateY: metrics.screenHeight }]
        }
    },
    slideOffStageUp: {
        from: {
            transform: [{ translateY: 0 }]
        },
        to: {
            transform: [{ translateY: -metrics.screenHeight }]
        }
    },
    slideOffStageLeft: {
        from: {
            transform: [{ translateX: 0 }]
        },
        to: {
            transform: [{ translateX: -metrics.screenWidth }]
        }
    },
    slideOffStageRight: {
        from: {
            transform: [{ translateX: 0 }]
        },
        to: {
            transform: [{ translateX: -metrics.screenWidth }]
        }
    }
});
