import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAILURE,
} from "../constants";
import { QuestionState } from "../../types";

const initialState: QuestionState = {
  questions: [],
  answers: [],
};

// eslint-disable-next-line
export default (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_QUESTIONS_REQUEST:
      return {
        ...state,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
      };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
      };
    case POST_ANSWER_REQUEST:
      return {
        ...state,
      };
    case POST_ANSWER_SUCCESS:
      const { answer } = action.payload;
      return {
        ...state,
        answers: [...state.answers, answer],
      };
    case POST_ANSWER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
