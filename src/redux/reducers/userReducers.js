import {
    USER_REGISTRATION_FAIL,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_RESET,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_SECTION_FAIL,
    USER_SECTION_REQUEST,
    USER_SECTION_SUCCESS,
} from "../constants/userConstants";

export const adminRegisterReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case USER_REGISTRATION_REQUEST:
            return { loading: true };
        case USER_REGISTRATION_SUCCESS:
            return { loading: false, success: true };
        case USER_REGISTRATION_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case USER_REGISTRATION_RESET:
            return {};
        default:
            return state;
    }
};

export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfo: action.payload,
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const adminDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { loading: true };
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                success: true,
                user: action.payload.data,
            };
        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const userSectionsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SECTION_REQUEST:
            return { loading: true };
        case USER_SECTION_SUCCESS:
            return {
                loading: false,
                success: true,
                section: action.payload,
            };
        case USER_SECTION_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
