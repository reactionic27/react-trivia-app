import { QuestionState, RootState } from "@types";

const getQuestionState = (state: RootState): QuestionState =>
  state.questionState;

export default getQuestionState;
