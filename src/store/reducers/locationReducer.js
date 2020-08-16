import * as actionTypes from '../actions/actionTypes';

const initialState = {
    city: 'Plovdiv'
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CITY:
            return {
                ...state
            };

        case actionTypes.CHANGE_CITY_SUCCESSFUL:
            return {
                ...state,
                city: action.payload,
            };

        case actionTypes.CHANGE_CITY_FAILURE:
            return {
                ...state,
                city: 'Plovdiv'
            };

        default:
            return state;
    }
};

export default locationReducer;
