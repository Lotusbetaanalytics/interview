import axios from "axios";
import {
    USER_REGISTRATION_FAIL,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGOUT,
    USER_SECTION_FAIL,
    USER_SECTION_REQUEST,
    USER_SECTION_SUCCESS,
    GETALLADMIN_FAIL,
    GETALLADMIN_SUCCESS,
    GETALLADMIN_REQUEST,
    GETCANDIDATESDETAILS_FAIL,
    GETCANDIDATESDETAILS_SUCCESS,
    GETCANDIDATESDETAILS_REQUEST,
    USER_VIEWADMIN_FAIL,
    USER_VIEWADMIN_SUCCESS,
    USER_VIEWADMIN_REQUEST,
} from "../constants/userConstants";

export const registerAdmin =
    (firstName, lastName, phone, email, password) =>
    async (dispatch) => {
        try {
            dispatch({ type: USER_REGISTRATION_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/api/v1/admin/",
                {
                    firstName,
                    lastName,
                    phone,
                    email,
                    password,
                },
                config
            );
            dispatch({
                type: USER_REGISTRATION_SUCCESS,
                payload: data,
            });
            console.log(firstName);
        } catch (error) {
            dispatch({
                type: USER_REGISTRATION_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };

export const loginAdmin =
    (email, password) => async (dispatch) => {
        try {
            dispatch({ type: USER_LOGIN_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/v1/auth/admin/",
                { email, password },
                config
            );

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem(
                "userInfo",
                JSON.stringify(data)
            );
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };

export const adminLogout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({
        type: USER_LOGOUT,
    });
};

export const myDetails =
    () => async (dispatch, getState) => {
        try {
            dispatch({ type: USER_DETAILS_REQUEST });
            const {
                adminLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.get(
                "/api/v1/admin/self",
                config
            );
            dispatch({
                type: USER_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: USER_DETAILS_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });

            localStorage.removeItem("userInfo");
            dispatch({ type: USER_LOGOUT });
        }
    };

export const sectionUser =
    (section) => async (dispatch) => {
        try {
            dispatch({ type: USER_SECTION_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/v1/section/",
                { section },
                config
            );

            dispatch({
                type: USER_SECTION_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: USER_SECTION_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };

export const getAllAdmin =
    () => async (dispatch, getState) => {
        try {
            dispatch({
                type: GETALLADMIN_REQUEST,
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
                "/api/v1/admin/",
                config
            );
            dispatch({
                type: GETALLADMIN_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GETALLADMIN_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };

export const getAllCandidatesdetails =
    () => async (dispatch, getState) => {
        try {
            dispatch({
                type: GETCANDIDATESDETAILS_REQUEST,
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
                `/api/v1/test-score/`,
                config
            );
            dispatch({
                type: GETCANDIDATESDETAILS_SUCCESS,
                payload: data,
            });

            console.log(data);
        } catch (error) {
            dispatch({
                type: GETCANDIDATESDETAILS_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };

export const viewAllAdmindetails =
    () => async (dispatch, getState) => {
        try {
            dispatch({
                type: USER_VIEWADMIN_REQUEST,
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
                "/api/v1/admin/",
                config
            );
            dispatch({
                type: USER_VIEWADMIN_SUCCESS,
                payload: data,
            });

            console.log(data);
        } catch (error) {
            dispatch({
                type: USER_VIEWADMIN_FAIL,
                payload:
                    error.response &&
                    error.response.data.error
                        ? error.response.data.error
                        : error.message,
            });
        }
    };
