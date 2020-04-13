import AsyncStorage from '@react-native-community/async-storage';

const REDUX_PERSIST = {
    active: true,
    storeConfig: {
        key: 'primary',
        storage: AsyncStorage,
        whitelist: ['todo'],
        // debug: __DEV__
    }
};

export default REDUX_PERSIST;
