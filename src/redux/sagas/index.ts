import { all } from "redux-saga/effects";
import questionSaga from "./question";

export default function* rootSaga(): Generator {
  yield all([questionSaga()]);
}
