import uuid from 'uuid/v4';

import { SET_ALERT } from './types';

export const setAlert = (msg, typeAlert) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, typeAlert, id }
  });
};
