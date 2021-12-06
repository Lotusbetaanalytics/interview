import axios from "axios";
import {
    QUESTION_FAIL,
    QUESTION_SUCCESS,
    QUESTION_REQUEST,
} from "../constants/questionConstants";

export const postQuestion =
    (question) => async (dispatch) => {
        try {
            dispatch({ type: QUESTION_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/v1/question/",
                { question },
                config
            );
            console.log(data)

            dispatch({
                type: QUESTION_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: QUESTION_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };

export const getQuestion =
    () => async (dispatch, getState) => {
        try {
            dispatch({ type: QUESTION_REQUEST });
            const {
                adminLogin: { userInfo },
            } = getState();
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.get(
                "/api/v1/question",
                config,
                );
                console.log(data)
            dispatch({
                type: QUESTION_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: QUESTION_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };
