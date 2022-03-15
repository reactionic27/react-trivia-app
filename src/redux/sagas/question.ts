import { put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
} from "../constants";
import { getQuestionsFn } from "../api";

function* getQuestions(): SagaIterator {
  try {
    const response = yield getQuestionsFn();
    yield put({ type: GET_QUESTIONS_SUCCESS, payload: response.results });
  } catch (err) {
    yield put({ type: GET_QUESTIONS_FAILURE });
  }
}

export default function* questionSaga(): SagaIterator {
  yield takeEvery(GET_QUESTIONS_REQUEST, getQuestions);
}
