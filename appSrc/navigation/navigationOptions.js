import { Platform } from 'react-native';

const headerLeftContainerStyle = {
    marginLeft: { ios: 15 }[Platform.OS] || 0,
    alignItems: 'center',
    justifyContent: 'center'
};

const headerRightContainerStyle = {
    marginRight: { ios: 15 }[Platform.OS] || 0,
    alignItems: 'center',
    justifyContent: 'center'
};

const headerTitleContainerStyle = {
    alignItems: 'center',
    justifyContent: 'center'
};

const headerStyle = {
    backgroundColor: 'white',
    height: 40,
    elevation: 0
};

export const defaultNavigationOptions = {
    headerTransparent: false,
    headerBackTitle: null,
    headerLeftContainerStyle,
    headerRightContainerStyle,
    headerTitleContainerStyle,
    headerStyle
};

export const modalNavigationOptions = {
    ...defaultNavigationOptions,
    headerTintColor: 'grey'
};
