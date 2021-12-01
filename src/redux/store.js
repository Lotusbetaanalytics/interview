import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
} from "./reducers/userReducers";
import { questionsReducer, scoreReducer } from "./reducers/questionReducer";
import { getTestReducer } from "./reducers/testReducer";

const reducer = combineReducers({
  registration: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  getquestion: questionsReducer,
  sendscore: scoreReducer,
  getTest: getTestReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
