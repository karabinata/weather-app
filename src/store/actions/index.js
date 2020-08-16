import * as actionTypes from './actionTypes';

export const getWeatherData = (city) => ({
    type: actionTypes.FETCH_WEATHER,
    payload: city
});

export const changeCity = (city) => ({
    type: actionTypes.CHANGE_CITY,
    payload: city
});