
import * as types from '../actions/addNameAction';

const INITIAL_STATE = {
    inputFieldText: '',
    registeredUser: 'Anonymous'
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_USER_NAME:
            return {
                ...state,
                registeredUser: action.payload
            };

        case types.UPDATE_INPUT_FIELD:
            return {
                ...state,
                inputFieldText: action.payload
            };

        default:
            return state;
    }
};
