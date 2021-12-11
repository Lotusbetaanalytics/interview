import {
    QUESTION_FAIL,
    QUESTION_SUCCESS,
    QUESTION_REQUEST,
    TEST_FAIL,
    TEST_SUCCESS,
    TEST_REQUEST,
    USER_GETALLQUESTIONS_REQUEST,
    USER_GETALLQUESTIONS_SUCCESS,
    USER_GETALLQUESTIONS_FAIL,
} from "../constants/questionConstants";

export const adminQuestionsReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case QUESTION_REQUEST:
            return { loading: true };
        case QUESTION_SUCCESS:
            return {
                loading: false,
                success: true,
                question: action.payload,
            };
        case QUESTION_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const testSelectReducer = (state = {}, action) => {
    switch (action.type) {
        case TEST_REQUEST:
            return { loading: true };
        case TEST_SUCCESS:
            return {
                loading: false,
                success: true,
                test: action.payload,
            };
        case TEST_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getAllQuestionsReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case USER_GETALLQUESTIONS_REQUEST:
            return { loading: true };
        case USER_GETALLQUESTIONS_SUCCESS:
            return {
                loading: false,
                success: true,
                test: action.payload,
            };
        case USER_GETALLQUESTIONS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
