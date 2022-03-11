import { useFetchQuestions } from "../../api";
import { renderWithLoader } from "../../utils/render-with-loader";
import { QuestionsUi } from "./ui";

export const Questions = () => {
  const [, { data, isPending, error }] = useFetchQuestions();

  return renderWithLoader(isPending || error, QuestionsUi, {
    questions: (data && data.results) || [],
  });
};
