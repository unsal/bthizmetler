
import axios from 'axios';

export const STORE_YIL = 'STORE_YIL';
export const STORE_GRUP = 'STORE_GRUP';
export const STORE_URL = 'STORE_URL';
export const STORE_URL_ALL = 'STORE_URL_ALL';
export const STORE_DATA = 'STORE_DATA';

export const updateStoreYil = yil => {
  return { type: STORE_YIL, yil }
}

export const updateStoreYilMW = yil => {
    return (dispatch, getState) => {
        dispatch(updateStoreYil(yil));
        if(getState().grup.toLowerCase()==='tumu') { dispatch(updateStoreURLALL());
        } else { dispatch(updateStoreURL());}
        dispatch(updateStoreDataMW())
     }
  }


export const updateStoreGrup = grup => {
    return { type: STORE_GRUP, grup }
  }

  export const updateStoreGrupMW = grup => {
    return (dispatch, getState) => {
        dispatch(updateStoreGrup(grup));
        if(getState().grup.toLowerCase()==='tumu') { dispatch(updateStoreURLALL());
        } else { dispatch(updateStoreURL());}
        dispatch(updateStoreDataMW())
     }
  }


  export const updateStoreURL = () => {
    return { type: STORE_URL }
  }

  export const updateStoreURLALL = () => {
    return { type: STORE_URL_ALL }
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