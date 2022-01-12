import axios from 'axios';

import {
  DISPLAY_DATA_ALERT,
  CLEAR_DATA_ALERT,
  ERROR_FETCH,
  GET_ALL_INVOICES,
  GET_SINGLE_INVOICE,
  START_FETCH,
  UPDATE_INVOICE,
  DELETE_INVOICE,
  CREATE_INVOICE,
  FILTER_ALL_INVOICES,
} from './actions';

export const displayDataAlert = () => {
  return (dispatch) => {
    dispatch({ type: DISPLAY_DATA_ALERT });
    setTimeout(() => {
      dispatch({ type: CLEAR_DATA_ALERT });
    }, 1500);
  };
};

export const getAllInvoices = () => {
  return (dispatch, getState) => {
    const token = getState().userReducer.token;

    dispatch({ type: START_FETCH });
    // GET METHOD
    axios
      .get('/api/v1/invoices', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>
        dispatch({ type: GET_ALL_INVOICES, payload: response.data })
      )
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
  };
};

export const getSingleInvoice = (id) => {
  return (dispatch, getState) => {
    const token = getState().userReducer.token;

    dispatch({ type: START_FETCH });
    // GET METHOD
    axios
      .get(`/api/v1/invoices/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>
        dispatch({ type: GET_SINGLE_INVOICE, payload: response.data })
      )
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
  };
};

export const updateInvoice = (id, data) => {
  return (dispatch, getState) => {
    const token = getState().userReducer.token;

    // PATCH METHOD
    axios
      .patch(`/api/v1/invoices/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>
        dispatch({ type: UPDATE_INVOICE, payload: response.data })
      )
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
    setTimeout(() => {
      dispatch({ type: CLEAR_DATA_ALERT });
    }, 1500);
  };
};

export const deleteInvoice = (id) => {
  return (dispatch, getState) => {
    const token = getState().userReducer.token;
    // DELETE METHOD
    axios
      .delete(`/api/v1/invoices/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch({ type: DELETE_INVOICE }))
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
  };
};

export const createInvoice = (data) => {
  return (dispatch, getState) => {
    const token = getState().userReducer.token;
    // PUT METHOD
    axios
      .post('/api/v1/invoices', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch({ type: CREATE_INVOICE }))
      .catch((error) => dispatch({ type: ERROR_FETCH, payload: error }));
    setTimeout(() => {
      dispatch({ type: CLEAR_DATA_ALERT });
    }, 1500);
  };
};

export const filterAllInvoices = (filter) => {
  return (dispatch) => dispatch({ type: FILTER_ALL_INVOICES, payload: filter });
};
