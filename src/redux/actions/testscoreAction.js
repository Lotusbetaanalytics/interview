import axios from "axios";
import {
  TESTSCORE_SUCCESS,
  TESTSCORE_REQUEST,
  TESTSCORE_FAIL,
} from "../constants/testscoreConstants";

export const getTestscore = () => async (dispatch) => {
  try {
    dispatch({ type: TESTSCORE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/api/v1/test-score/self", config);
    dispatch({
      type: TESTSCORE_SUCCESS,
      payload: data,
    });

    console.log(data)
  } catch (error) {
    dispatch({
      type: TESTSCORE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
