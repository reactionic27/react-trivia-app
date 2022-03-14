// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PromiseCallback = (value?: any) => void;

const apiUrl =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

const loadQuestions = () => (resolve: PromiseCallback) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => resolve(data));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getQuestionsFn = (): any => new Promise(loadQuestions());

export { getQuestionsFn };
