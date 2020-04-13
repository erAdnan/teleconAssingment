import { persistReducer } from 'redux-persist';
import ReduxPersistConfig from '../configs/reduxPersist';

import * as types from '../actions/eventActions';

const INITIAL_STATE = {
    eventListByName: {
        Anonymous: []
    },
    eventsList: [],
};

export const reducer = persistReducer({
    key: 'eventReducerStatus',
    storage: ReduxPersistConfig.storeConfig.storage,
},
    (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case types.GET_EVENTS:
                return {
                    ...state,
                    eventsList: action.payload,
                };

            case types.UPDATE_TRACKED_LIST:
                return {
                    ...state,
                    eventListByName: {
                        ...state.eventListByName,
                        [action.payload.userName]: action.payload.data
                    }
                };

            default:
                return state;
        }
    });
