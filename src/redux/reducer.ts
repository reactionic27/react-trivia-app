import { RootState } from "@types";
import { combineReducers, Reducer } from "redux";

import questionReducer from "./reducer/questions";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  questionState: questionReducer,
});

export default rootReducer;
