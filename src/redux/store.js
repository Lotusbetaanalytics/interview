import {
    createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    adminLoginReducer,
    adminDetailsReducer,
    userSectionsReducer,
    adminRegisterReducer,
} from "./reducers/userReducers";

import {
    adminQuestionsReducer,
    getAllQuestionsReducer,
    testSelectReducer,
} from "./reducers/questionReducers";
import {
    createTestReducer,
    getTestReducer,
} from "./reducers/testReducers";
import {
    createSectionReducer,
    getSectionReducer,
    getSectionByIdReducer,
} from "./reducers/sectionReducers";

const reducer = combineReducers({
    adminRegister: adminRegisterReducer,
    adminLogin: adminLoginReducer,
    adminDetails: adminDetailsReducer,
    userSections: userSectionsReducer,
    adminQuestions: adminQuestionsReducer,
    testOptions: testSelectReducer,
    newTest: createTestReducer,
    allTest: getTestReducer,
    newSection: createSectionReducer,
    allSection: getSectionReducer,
    examSection: getSectionByIdReducer,
    getAllQuestions: getAllQuestionsReducer,
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
