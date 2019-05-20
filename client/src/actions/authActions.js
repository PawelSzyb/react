import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { setAlert } from './alertActions';

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/users/register',
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data;
    console.log(errors);

    if (errors) {
      errors.map((error) => setAlert(error.msg, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
