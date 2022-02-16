import {
  QUESTIONS_FAIL,
  QUESTIONS_SUCCESS,
  QUESTIONS_REQUEST,
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
  QUESTIONS_RESET,
  DELETE_QUESTION_BYID,
<<<<<<< HEAD
  EDITQUESTION_BYID_REQUEST,
  EDITQUESTION_BYID_SUCCESS,
  EDITQUESTION_BYID_FAIL,
=======
  EDIT_QUESTION_BYID_REQUEST,
  EDIT_QUESTION_BYID_SUCCESS,
  EDIT_QUESTION_BYID_FAIL,
>>>>>>> cb072d7a8c0d9462ce6cc73311c7195bd372f26a
} from "../constants/questionConstants";

export const adminQuestionsReducer = (state = {}, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case QUESTIONS_REQUEST:
      return { loading: true };
    case QUESTIONS_SUCCESS:
=======
    case EDIT_QUESTION_BYID_REQUEST:
      return { loading: true };
    case EDIT_QUESTION_BYID_SUCCESS:
>>>>>>> cb072d7a8c0d9462ce6cc73311c7195bd372f26a
      return {
        loading: false,
        success: true,
        question: action.payload,
      };
<<<<<<< HEAD
    case QUESTIONS_FAIL:
=======
    case EDIT_QUESTION_BYID_FAIL:
>>>>>>> cb072d7a8c0d9462ce6cc73311c7195bd372f26a
      return {
        loading: false,
        error: action.payload,
      };
    case QUESTIONS_RESET:
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

export const getAllQuestionsReducer = (state = { questions: [] }, action) => {
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

export const getQuestionsByIdReducer = (state = { questions: [] }, action) => {
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
    case DELETE_QUESTION_BYID:
      return {
        ...state,
        questions: state.questions.filter((x) => x._id !== action.payload),
      };
    default:
      return state;
  }
};

export const deleteQuestionByIdReducer = (
  state = { questions: [] },
  action
) => {
  switch (action.type) {
    case DELETE_QUESTION_BYID_REQUEST:
      return {
        ...state,
        questions: state.questions.filter((x) => x._id !== action.payload),
        loading: true,
      };
    case DELETE_QUESTION_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        deleteQuestion: action.payload,
      };
    case DELETE_QUESTION_BYID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
<<<<<<< HEAD
};

export const editQuestionByIdReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case EDITQUESTION_BYID_REQUEST:
      return {
        ...state,
        questions: state.questions.filter((x) => x._id === action.payload),
        loading: true,
      };
    case EDITQUESTION_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        deleteQuestion: action.payload,
      };
    case EDITQUESTION_BYID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
=======
>>>>>>> cb072d7a8c0d9462ce6cc73311c7195bd372f26a
};

export const editQuestionsReducer = (state = {}, action) => {
    switch (action.type) {
      case EDIT_QUESTION_BYID_REQUEST:
        return { loading: true };
      case EDIT_QUESTION_BYID_SUCCESS:
        return {
          loading: false,
          success: true,
          question: action.payload,
        };
      case EDIT_QUESTION_BYID_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case QUESTIONS_RESET:
        return {};
      default:
        return state;
    }
  };
