import axios from "axios"
import {
    QUESTION_REQUEST,
    QUESTION_SUCCESS,
    QUESTION_FAIL,
} from  "../constants/questionConstant";

// create variable
export const getTestquestion = () => async (dispatch, getState) => {
  // definining action i.e question request
    try {
      dispatch({ type: QUESTION_REQUEST });
      const {

        userLogin: { userInfo },
  
      } = getState();

    // create a variable to fetch user token 
    const config = {
  
        headers: {
  
          "Content-Type": "application/json",
  
          "Access-Control-Allow-Origin": "*",
  
          Authorization: `Bearer ${userInfo.token}`,
  
        },
  
      };
      // variable "data" is created for as the name of data coming from the back end
      // = get those data from the api in the bracket
      const { data } = await axios.get("/api/v1/question/id", config);
      dispatch({
      // the line below shows if its successfull or not,if it is successful then load the data
        type: QUESTION_SUCCESS,
        payload: data,
      });

      console.log(data)
      // if it isnt successful then catch type of error in other to know what type of error
    } catch (error) {
      dispatch({
        // the line below shows failed and the payload will display the error
        type: QUESTION_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error                                                                                              
            : error.message,
      });
    }
  };



  