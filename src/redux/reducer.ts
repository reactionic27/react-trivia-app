import { combineReducers, Reducer } from "redux";

import questionReducer from "./reducer/questions";

import { RootState } from "../types";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  questionState: questionReducer,
});

export default rootReducer;
