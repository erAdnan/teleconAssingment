import { NavigationActions } from 'react-navigation';

class NavigationService {
    _navigator;

    setTopLevelNavigator = navigatorRef => {
        this._navigator = navigatorRef;
    };

    handleAndroidBackButtonPress = () => {
        try {
            const currentStack = this._navigator.state.nav.routes[this._navigator.state.nav.index]; // Either the AuthorizedStack or UnauthorizedStack

            if (currentStack.index === 0) {
                // We are at the initial screen in either stack
                // so minimize the app
                return false;
            }

            NavigationService.goBack();

            return true;
        } catch {
            // If an error occurs, fallback to minimizing the app
            return false;
        }
    };

    navigate = (routeName, params) => {
        this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    };

    goBack = () => {
        this._navigator.dispatch(NavigationActions.back());
    };
}

const navigationService = new NavigationService();

export default navigationService;
