import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from "./reducers";
import { createLogicMiddleware } from 'redux-logic';
import rootLogic from './logic/';
import axios from 'axios';

const deps = {
    httpClient: axios
};

const logicMiddleware = createLogicMiddleware(rootLogic, deps);

const composedMiddleware = compose(applyMiddleware(logicMiddleware));

export default createStore(rootReducer,composedMiddleware);
