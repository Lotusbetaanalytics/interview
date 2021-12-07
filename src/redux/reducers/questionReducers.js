import {QUESTION_FAIL,
  QUESTION_SUCCESS,
  QUESTION_REQUEST,
OPTION_FAIL,
OPTION_SUCCESS,
OPTION_REQUEST,
TEST_FAIL,
TEST_SUCCESS,
TEST_REQUEST} from '../constants/questionConstants'

  export const adminQuestionsReducer = (state = {}, action) => {
    switch (action.type) {
      case QUESTION_REQUEST:
        return { loading: true }
      case QUESTION_SUCCESS:
        return { loading: false, success: true, question: action.payload }
      case QUESTION_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const questionOptionReducer = (state = {}, action) => {
    switch (action.type) {
      case OPTION_REQUEST:
        return { loading: true }
      case OPTION_SUCCESS:
        return { loading: false, success: true, option: action.payload }
      case OPTION_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const testSelectReducer = (state = {}, action) => {
    switch (action.type) {
      case TEST_REQUEST:
        return { loading: true }
      case TEST_SUCCESS:
        return { loading: false, success: true, test: action.payload }
      case TEST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  