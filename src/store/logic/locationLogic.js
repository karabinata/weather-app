import * as actionTypes from '../actions/actionTypes';
import { createLogic } from 'redux-logic';

const locationLogic = createLogic({
    type: actionTypes.CHANGE_CITY,
    latest: true,

    processOptions: {
        dispatchReturn: true,

        successType: actionTypes.CHANGE_CITY_SUCCESSFUL,
        failType: actionTypes.CHANGE_CITY_FAILURE
    },

    process({ action }) {
        return action.payload;
    }
});

export default [
    locationLogic
];
