import {
  CREATE_NEW_ITEM,
  DELETE_ITEM,
  HANDLE_CLIENT_INFO,
  HANDLE_DATE_INFO,
  HANDLE_GENERAL_INFO,
  HANDLE_ITEM_INFO,
  HANDLE_SENDER_INFO,
  HANDLE_TERM_INFO,
  RESET_ITEM,
  SET_ITEM,
} from './actions';

export const handleSenderInfo = (name, value) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_SENDER_INFO,
      payload: { name, value },
    });
};

export const handleClientInfo = (name, value) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_CLIENT_INFO,
      payload: { name, value },
    });
};

export const handleGeneralInfo = (name, value) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_GENERAL_INFO,
      payload: { name, value },
    });
};

export const handleDateInfo = (date, type) => {
  return (dispatch) =>
    dispatch({ type: HANDLE_DATE_INFO, payload: { date, type } });
};

export const handleTermInfo = (term) => {
  return (dispatch) => dispatch({ type: HANDLE_TERM_INFO, payload: term });
};

export const handleItemInfo = (name, value, id) => {
  return (dispatch) =>
    dispatch({
      type: HANDLE_ITEM_INFO,
      payload: { name, value, id },
    });
};

export const createNewItem = () => {
  return (dispatch) => dispatch({ type: CREATE_NEW_ITEM });
};

export const deleteItem = (id) => {
  return (dispatch) => dispatch({ type: DELETE_ITEM, payload: id });
};

export const setItem = (item) => {
  return (dispatch) => dispatch({ type: SET_ITEM, payload: item });
};

export const resetItem = () => {
  return (dispatch) => dispatch({ type: RESET_ITEM });
};
