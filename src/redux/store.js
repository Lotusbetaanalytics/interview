import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  forgetPasswordReducer,
} from "./reducers/userReducers";
import { questionsReducer } from "./reducers/questionReducer";
import { getTestReducer } from "./reducers/testReducer";
import { ResponseReducer } from "./reducers/responseReducer";
import { getTestscoreReducer } from "./reducers/testscoreReducer";

const reducer = combineReducers({
  registration: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  getquestion: questionsReducer,
  getTest: getTestReducer,
  Response : ResponseReducer,
  Myscore : getTestscoreReducer,
  postforgetpassword: forgetPasswordReducer,
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
