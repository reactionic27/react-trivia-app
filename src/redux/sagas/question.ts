import { put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  POST_ANSWER_FAILURE,
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
} from "../constants";
import { getQuestionsFn } from "../api";
import { PayloadType } from "../../types";

function* getQuestions(): SagaIterator {
  try {
    const response = yield getQuestionsFn();
    yield put({ type: GET_QUESTIONS_SUCCESS, payload: response.results });
  } catch (err) {
    yield put({ type: GET_QUESTIONS_FAILURE });
  }
}

function* postAnswer({ payload: { answer } }: PayloadType): SagaIterator {
  try {
    yield put({ type: POST_ANSWER_SUCCESS, payload: { answer } });
  } catch (err) {
    yield put({ type: POST_ANSWER_FAILURE });
  }
}

export default function* questionSaga(): SagaIterator {
  yield takeEvery(GET_QUESTIONS_REQUEST, getQuestions);
  yield takeEvery(POST_ANSWER_REQUEST, postAnswer);
}
