
import axios from 'axios';

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

  export const updateStoreURL = () => {
    return { type: STORE_URL }
  }

  export const updateStoreData = data => {
    return { type: STORE_DATA, data }
  }

  //Middlewares
  export const updateStoreDataMW = () => {
    return (dispatch, getState) => {
            const url = getState().url;
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