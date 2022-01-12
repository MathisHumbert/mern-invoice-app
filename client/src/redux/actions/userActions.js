import axios from 'axios';
import {
  CLEAR_USER_ALERT,
  DISPLAY_USER_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
} from './actions';

const addUserToLocalStorage = (user, token) => {
  localStorage.setItem('user', user);
  localStorage.setItem('token', token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export const displayUserAlert = () => {
  return (dispatch) => {
    dispatch({ type: DISPLAY_USER_ALERT });
    setTimeout(() => {
      dispatch({ type: CLEAR_USER_ALERT });
    }, 3000);
  };
};

export const setupUser = (formUser, type, alertText) => {
  return (dispatch) => {
    dispatch({ type: SETUP_USER_BEGIN });
    axios
      .post(`/api/v1/auth/${type}`, formUser)
      .then((response) => {
        const { user, token } = response.data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { data: response.data, alertText },
        });
        addUserToLocalStorage(user, token);
      })
      .catch((error) =>
        dispatch({ type: SETUP_USER_ERROR, payload: error.response.data.msg })
      );
    setTimeout(() => {
      dispatch({ type: CLEAR_USER_ALERT });
    }, 3000);
  };
};

export const logoutUser = () => {
  const root = document.getElementById('root');
  root.classList.remove('stop-scrolling');
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };
};
