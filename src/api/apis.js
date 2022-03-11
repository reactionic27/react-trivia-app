import { useApi } from "./use-api";

export const useFetchQuestions = (manual) =>
  useApi({
    manual,
    url: "api.php",
    state: "questions",
    params: {
      amount: 10,
      difficulty: "hard",
      type: "boolean",
    },
  });
