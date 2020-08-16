import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    weatherInfo: "no weather data fetched yet"
};

const weatherDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_WEATHER:
            return {
                ...state,
                isFetching: true
            };

        case actionTypes.FETCH_WEATHER_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                weatherInfo: action.payload,
            };

        case actionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                weatherInfo: "Failure fetching weather data",
                isFetching: false
            };

        default:
            return state;
    }
};

export default weatherDataReducer;
