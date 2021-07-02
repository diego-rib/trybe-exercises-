import { combineReducers } from "redux";
import loginUserReducer from './loginUserReducer';
import signUpClientReducer from './signUpClientReducer';

const rootReducer = combineReducers({
  login: loginUserReducer,
  clients: signUpClientReducer,
});

export default rootReducer;
