import axios from "axios";
import {
    QUESTION_FAIL,
    QUESTION_SUCCESS,
    QUESTION_REQUEST,
    OPTION_FAIL,
    OPTION_SUCCESS,
    OPTION_REQUEST,
    TEST_FAIL,
    TEST_SUCCESS,
    TEST_REQUEST,
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

    export const optionsQuestion =
    (option) => async (dispatch) => {
        try {
            dispatch({ type: OPTION_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/v1/question/",
                { option },
                config
            );

            dispatch({
                type: OPTION_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: OPTION_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };


    export const testOptions =
    (title, timer ) => async (dispatch) => {
        try {
            dispatch({ type: TEST_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/v1/test/",
                { title, timer },
                config
            );

            dispatch({
                type: TEST_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: TEST_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };