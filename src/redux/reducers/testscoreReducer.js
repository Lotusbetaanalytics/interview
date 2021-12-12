import {
    TESTSCORE_FAIL,
    TESTSCORE_REQUEST,
    TESTSCORE_SUCCESS,
  } from "../constants/testscoreConstants";

  export const getTestscoreReducer = (state = { testscore: [] }, action) => {
    switch (action.type) {
      case TESTSCORE_REQUEST:
        return { loading: true };
      case TESTSCORE_SUCCESS:
        return { loading: false, success: true, testscore: action.payload.data };
      case TESTSCORE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  