import axios from "axios";
import {
    QUESTION_FAIL,
    QUESTION_SUCCESS,
    QUESTION_REQUEST,
    USER_GETALLQUESTIONS_REQUEST,
    USER_GETALLQUESTIONS_SUCCESS,
    USER_GETALLQUESTIONS_FAIL,
    GET_QUESTION_BYID_REQUEST,
    GET_QUESTION_BYID_SUCCESS,
    GET_QUESTION_BYID_FAIL,
} from "../constants/questionConstants";

export const postQuestion =
    (question, answers, correct_answers, section) =>
    async (dispatch) => {
        try {
            dispatch({ type: QUESTION_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/v1/question/",
                {
                    question,
                    answers,
                    correct_answers,
                    section,
                },
                config
            );
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
                config
            );
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

export const getAllQuestions =
    () => async (dispatch, getState) => {
        try {
            dispatch({
                type: USER_GETALLQUESTIONS_REQUEST,
            });
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
                "/api/v1/question/",
                config
            );
            dispatch({
                type: USER_GETALLQUESTIONS_SUCCESS,
                payload: data,
            });
            console.log(data);
        } catch (error) {
            dispatch({
                type: USER_GETALLQUESTIONS_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };

export const getQuestionsId =
    () => async (dispatch, getState) => {
        try {
            dispatch({ type: GET_QUESTION_BYID_REQUEST });
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
                `/api/v1/question/`,
                config
            );
            dispatch({
                type: GET_QUESTION_BYID_SUCCESS,
                payload: data,
            });
            console.log(data);
        } catch (error) {
            dispatch({
                type: GET_QUESTION_BYID_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };
