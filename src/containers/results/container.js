import { renderWithLoader } from "../../utils/render-with-loader";
import { ResultsUi } from "./ui";

export const Results = () => {
  return renderWithLoader(false, ResultsUi);
};
