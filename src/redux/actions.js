
export const STORE_YIL = 'STORE_YIL';
export const STORE_GRUP = 'STORE_GRUP';

export const updateStoreYil = yil => {
    return {
      type: STORE_YIL,
      yil: yil
    }
  }

export const updateStoreGrup = grup => {
    return {
      type: STORE_GRUP,
      grup: grup
    }
  }