import axios from "axios"
import {
    QUESTION_REQUEST,
    QUESTION_SUCCESS,
    QUESTION_FAIL,
} from  "../constants/questionConstant";


  export const getTestquestion = () => async (dispatch,getState) => {
      try {
        dispatch({ type: QUESTION_REQUEST });
        const {
          userLogin: { userInfo },
        } = getState();
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.get("/api/v1/question/assigned", config);
        dispatch({
          type: QUESTION_SUCCESS,
          payload: data,
        });

      } catch (error) {
        dispatch({
          type: QUESTION_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error                                                                                              
              : error.message,
        });
      }
    };
  
  

  