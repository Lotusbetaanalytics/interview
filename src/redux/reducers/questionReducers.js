import {QUESTION_FAIL,
  QUESTION_SUCCESS,
  QUESTION_REQUEST,} from '../constants/questionConstants'

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
  