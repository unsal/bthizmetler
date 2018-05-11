//Redux
import {createStore} from 'redux';
import { STORE_YIL, STORE_GRUP, STORE_DATA, STORE_URL } from './actions'

const initialState = { yil:'2018', grup:'Yazilim', url:'', data: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
            case STORE_YIL: state = { ...state, yil: action.payload }; return state;
            case STORE_GRUP: state = { ...state, grup: action.payload}; return state;
            case STORE_URL: state = { ...state, url: action.payload}; return state;
            case STORE_DATA: state = {...state,  data: action.payload}; return state;
            // case STORE_DATA: state = Object.assign({}, state, { data: action.payload}); return state;

            default: return state;
        }
    }

export const store = createStore(reducer);