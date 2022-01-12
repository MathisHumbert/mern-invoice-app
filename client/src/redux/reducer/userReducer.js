import {
  CLEAR_USER_ALERT,
  DISPLAY_USER_ALERT,
  LOGOUT_USER,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
} from '../actions/actions';

const localUser = localStorage.getItem('user');
const localToken = localStorage.getItem('token');

const inititalState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: localUser || null,
  token: localToken || null,
};

const userReducer = (state = inititalState, { type, payload }) => {
  if (type === DISPLAY_USER_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: 'All fields are required!',
      alertType: 'danger',
    };
  }
  if (type === CLEAR_USER_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: '',
      alertType: '',
    };
  }
  if (type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: payload.data.user,
      token: payload.data.token,
      showAlert: true,
      alertText: payload.alertText,
      alertType: 'success',
    };
  }
  if (type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: payload,
      alertType: 'danger',
    };
  }
  if (type === LOGOUT_USER) {
    return {
      ...inititalState,
      user: null,
      token: null,
    };
  }
  return state;
};

export default userReducer;
