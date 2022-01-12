import uniqid from 'uniqid';
import {
  DISPLAY_DATA_ALERT,
  CLEAR_DATA_ALERT,
  CREATE_INVOICE,
  DELETE_INVOICE,
  ERROR_FETCH,
  GET_ALL_INVOICES,
  GET_SINGLE_INVOICE,
  START_FETCH,
  UPDATE_INVOICE,
  FILTER_ALL_INVOICES,
} from '../actions/actions';

const initialState = {
  all_invoices: [],
  invoices: [],
  single_invoice: [],
  isLoading: true,
  isError: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  reset: '',
};

const dataReducer = (state = initialState, { type, payload }) => {
  if (type === DISPLAY_DATA_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: 'All fields are required!',
      alertType: 'danger',
    };
  }
  if (type === CLEAR_DATA_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: '',
      alertType: '',
    };
  }
  if (type === START_FETCH) {
    return { ...state, isLoading: true, isError: false };
  }
  if (type === ERROR_FETCH) {
    return { ...state, isLoading: true, isError: true };
  }
  if (type === GET_ALL_INVOICES) {
    return {
      ...state,
      all_invoices: payload,
      invoices: payload,
      isLoading: false,
    };
  }
  if (type === GET_SINGLE_INVOICE) {
    return { ...state, single_invoice: payload, isLoading: false };
  }
  if (type === UPDATE_INVOICE) {
    return {
      ...state,
      single_invoice: payload,
      showAlert: true,
      alertText: 'Invoice Updated!',
      alertType: 'success',
    };
  }
  if (type === DELETE_INVOICE) {
    return {
      ...state,
      reset: uniqid(),
    };
  }
  if (type === CREATE_INVOICE) {
    return {
      ...state,
      showAlert: true,
      alertText: 'Invoice Created!',
      alertType: 'success',
      reset: uniqid(),
    };
  }
  if (type === FILTER_ALL_INVOICES) {
    if (payload === 'all') {
      return { ...state, invoices: state.all_invoices };
    }
    const invoices = state.all_invoices.filter(
      (item) => item.status === payload
    );
    return { ...state, invoices };
  }
  return state;
};

export default dataReducer;
