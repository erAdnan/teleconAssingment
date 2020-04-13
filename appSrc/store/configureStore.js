import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createNetworkMiddleware } from 'react-native-offline';

export default rootReducer => {
    /* ------------- Redux Configuration ------------- */
    const middleware = [];

    /* ------------- React Native Offline ------------- */
    middleware.push(createNetworkMiddleware());

    /* ------------- Thunk Middleware ------------- */
    middleware.push(thunk);

    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        compose(
            applyMiddleware(...middleware)
        ),
    );

    return store;
};
