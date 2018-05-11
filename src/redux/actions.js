
import axios from 'axios';
import config from '../config';
// import { store } from '../redux/store';

export const STORE_YIL = 'STORE_YIL';
export const STORE_GRUP = 'STORE_GRUP';
export const STORE_URL = 'STORE_URL';
export const STORE_DATA = 'STORE_DATA';

export const updateStoreYil = yil => {
    return { type: STORE_YIL, yil }
  }

export const updateStoreGrup = grup => {
    return { type: STORE_GRUP, grup }
  }

  export const updateStoreURL = url => {
    return { type: STORE_URL, url }
  }

  //Middlewares
export const updateStoreURLMW = (yil, grup) => {
  return (dispatch) => {
                const url = config.apiURL+"/"+yil+"/"+grup.toLowerCase();
                dispatch(updateStoreURL(url));
                }
}

  export const updateStoreData = data => {
    return { type: STORE_DATA, data }
  }

  //Middlewares
  export const updateStoreDataMW = url => {
    return (dispatch) => {
            axios.get(url)
                 .then(res => {
                        const data = res.data.projeler;
                        dispatch(updateStoreData(data))
            })
            .catch(err=>{
              console.log(err)
            })

    }
  }