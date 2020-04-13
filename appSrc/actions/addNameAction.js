
export const UPDATE_INPUT_FIELD = 'UPDATE_INPUT_FIELD';
export const updateInputField = value => ({
    type: UPDATE_INPUT_FIELD,
    payload: value
});

export const ADD_USER_NAME = 'ADD_USER_NAME';
export const addUser = value => ({
    type: ADD_USER_NAME,
    payload: value
});