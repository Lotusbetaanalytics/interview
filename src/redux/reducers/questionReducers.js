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
    GET_QUESTION_BYID_REQUEST,
    GET_QUESTION_BYID_SUCCESS,
    GET_QUESTION_BYID_FAIL,
    DELETE_QUESTION_BYID_REQUEST,
    DELETE_QUESTION_BYID_SUCCESS,
    DELETE_QUESTION_BYID_FAIL,
    QUESTION_RESET,
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
        case QUESTION_RESET:
            return {};
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
    state = { questions: [] },
    action
) => {
    switch (action.type) {
        case USER_GETALLQUESTIONS_REQUEST:
            return { ...state, loading: true };
        case USER_GETALLQUESTIONS_SUCCESS:
            return {
                loading: false,
                success: true,
                questions: action.payload,
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

export const getQuestionsByIdReducer = (
    state = { questions: [] },
    action
) => {
    switch (action.type) {
        case GET_QUESTION_BYID_REQUEST:
            return { ...state, loading: true };
        case GET_QUESTION_BYID_SUCCESS:
            return {
                loading: false,
                success: true,
                questions: action.payload.data,
            };
        case GET_QUESTION_BYID_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const deleteQuestionByIdReducer = (
    state = { questionsID: [] },
    action
) => {
    switch (action.type) {
        case DELETE_QUESTION_BYID_REQUEST:
            return { ...state, loading: true };
        case DELETE_QUESTION_BYID_SUCCESS:
            return {
                loading: false,
                success: true,
                questions: action.payload.data,
            };
        case DELETE_QUESTION_BYID_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
