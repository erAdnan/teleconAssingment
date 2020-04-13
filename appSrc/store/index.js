import { persistReducer } from 'redux-persist';
import configureStore from './configureStore';
import reducers from '../reducers';
import ReduxPersistConfig from '../configs/reduxPersist';

const { storeConfig } = ReduxPersistConfig;

export default () => {
    const finalReducers = persistReducer(storeConfig, reducers);

    const store = configureStore(finalReducers);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers');

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
