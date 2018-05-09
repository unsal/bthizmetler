//Redux
import {createStore} from 'redux';
import { STORE_YIL, STORE_GRUP } from './actions'

const initialState = { yil:'2018', grup:'Yazilim' };

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case STORE_YIL: return { ...state, yil: action.yil };
    case STORE_GRUP: return { ...state, grup: action.grup} ;
		default: return state;
        }
    }

export const store = createStore(reducer);