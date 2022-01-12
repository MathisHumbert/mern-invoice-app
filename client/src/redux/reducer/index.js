import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import formReducer from './formReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  toggleReducer,
  formReducer,
  dataReducer,
  userReducer,
});

export default rootReducer;
