import { combineReducers, Reducer } from "redux";
import { RootState } from "../types";

import questionReducer from "./reducer/questions";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  questionState: questionReducer,
});

export default rootReducer;
