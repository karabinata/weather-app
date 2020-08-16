import * as actionTypes from '../actions/actionTypes';
import { createLogic } from 'redux-logic';
import axios from '../../apis/open-weather';

const appId = '5b9782b7fde80c9690beb16f67e7ae5b';

const getWeatherDataLogic = createLogic({
    type: actionTypes.FETCH_WEATHER,
    latest: true,

    processOptions: {
        dispatchReturn: true,

        successType: actionTypes.FETCH_WEATHER_SUCCESSFUL,
        failType: actionTypes.FETCH_WEATHER_FAILURE
    },

    async process({ action }) {
        return (await axios(`/data/2.5/weather?q=${action.payload}&units=metric&APPID=${appId}`)).data;
    }
});

export default [
    getWeatherDataLogic
];
