import { persistStore } from 'redux-persist';

const updateReducers = async store =>
    new Promise(async resolve => persistStore(store, null, resolve));

export default { updateReducers };