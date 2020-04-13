import * as eventsList from '../constants/events.json';

export const GET_EVENTS = 'GET_EVENTS';
export const getEvents = () => (dispatch, getState) => {
    dispatch({
        type: GET_EVENTS,
        payload: eventsList.data
    });
};

export const UPDATE_TRACKED_LIST = 'UPDATE_TRACKED_LIST';
export const addToTrackedList = item => (dispatch, getState) => {
    const {
        event: { eventListByName },
        addName: { registeredUser }
    } = getState();

    let tracked = [...eventListByName[registeredUser]] || [];

    if (tracked.some(obj => obj.event_name === item.event_name)) {
        alert("Already Tracking.");
    } else {
        tracked.push(item);
    }

    dispatch({
        type: UPDATE_TRACKED_LIST,
        payload: {
            userName: registeredUser,
            data: tracked
        }
    });
};

export const removeItem = index => (dispatch, getState) => {

    const {
        event: { eventListByName },
        addName: { registeredUser }
    } = getState();

    let tracked = [...eventListByName[registeredUser]] || [];
    tracked.length > 0 && tracked.splice(index, 1);

    dispatch({
        type: UPDATE_TRACKED_LIST,
        payload: {
            userName: registeredUser,
            data: tracked
        }
    })
};
