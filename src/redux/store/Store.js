import {createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {GET_DATA_REDUCER} from '../reducers/NotesReducer';


const CATALOGO = combineReducers({
    stateDatos: GET_DATA_REDUCER
});


const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;