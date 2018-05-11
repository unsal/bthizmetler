//Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { STORE_YIL, STORE_GRUP, STORE_DATA, STORE_URL } from './actions'
import config from '../config'

const initialState = { yil:'2018',
                       grup:'yazilim',
                       url: config.apiURL+"/2018/yazilim",
                       data: []
                    };

const reducer = (state = initialState, action) => {
	switch (action.type) {
            case STORE_YIL:  return { ...state, yil:  action.yil };
            case STORE_GRUP: return { ...state, grup: action.grup};
            case STORE_URL:  return { ...state, url:  action.url };
            case STORE_DATA: return { ...state, data: action.data};
            default: return state;
        }
    }


export const store = createStore(reducer, applyMiddleware(thunk));