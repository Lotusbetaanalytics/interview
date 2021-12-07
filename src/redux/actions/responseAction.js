import axios from "axios";
import {
    RESPONSE_FAIL,
    RESPONSE_REQUEST,
    RESPONSE_SUCCESS,
    
  } from "../constants/responseConstant";
export const postResponse =
(candidate,test,section,question,selected_answer) =>
async (dispatch) => {
  try {
    dispatch({ type: RESPONSE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/candidate-response/",
      { candidate,test,section,question,selected_answer },
      config
    );
    dispatch({
      type: RESPONSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: RESPONSE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};