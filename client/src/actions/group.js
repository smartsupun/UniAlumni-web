import { CREATE } from '../constants/actionTypes';
import * as api from '../api/index.js';



export const group = (formData2,router) => async (dispatch) => {
  try {
    const { data } = await api.Group(formData2);

    dispatch({ type: CREATE, payload: data });
    router('/Main');

  } catch (error) {
    console.log(error.message);
  }
};