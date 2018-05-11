
export const STORE_YIL = 'STORE_YIL';
export const STORE_GRUP = 'STORE_GRUP';
export const STORE_URL = 'STORE_URL';
export const STORE_DATA = 'STORE_DATA';

export const updateStoreYil = payload => {
    return { type: STORE_YIL, payload }
  }

export const updateStoreGrup = payload => {
    return { type: STORE_GRUP, payload }
  }

  export const updateStoreURL = (payload) => {
    return { type: STORE_URL, payload }
  }

  export const updateStoreData = payload => {
    return { type: STORE_DATA, payload }
  }

