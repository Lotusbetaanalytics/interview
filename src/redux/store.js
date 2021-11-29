import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  adminLoginReducer,
  adminDetailsReducer,
  userSectionsReducer,
  adminRegisterReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  adminRegister: adminRegisterReducer,
  adminLogin: adminLoginReducer,
  adminDetails: adminDetailsReducer,
  userSections: userSectionsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  adminLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
