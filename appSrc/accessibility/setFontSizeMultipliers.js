import { NativeModules } from 'react-native';

NativeModules.AccessibilityManager &&
    NativeModules.AccessibilityManager.setAccessibilityContentSizeMultipliers &&
    NativeModules.AccessibilityManager.setAccessibilityContentSizeMultipliers({
        extraSmall: 1.0,
        small: 1.0,
        medium: 1.0,
        large: 1.0,
        extraLarge: 1.0,
        extraExtraLarge: 1.0,
        extraExtraExtraLarge: 1.0,
        accessibilityMedium: 1.1,
        accessibilityLarge: 1.2,
        accessibilityExtraLarge: 1.3,
        accessibilityExtraExtraLarge: 1.4,
        accessibilityExtraExtraExtraLarge: 1.5
    });
