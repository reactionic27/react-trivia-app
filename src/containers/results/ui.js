import { Link } from "@reach/router";
import cx from "classnames";
import { useContext } from "react";
import { AppContext } from "../../App";
import { ResultItem } from "../../components/result-item";
import "./style.css";

const getResults = (questions, answers) => {
  let count = 0;
  questions.forEach((qs, index) => {
    if (qs.correct_answer === answers[index]) {
      count++;
    }
  });
  return count;
};

export const ResultsUi = () => {
  const {
    state: { questions, answers },
  } = useContext(AppContext);

  return (
    <div className={cx("results-container")}>
      {questions && (
        <>
          <h1>
            You scored {getResults(questions.results, answers)} /{" "}
            {questions.results.length}
          </h1>
          {questions.results.map((qs, index) => (
            <ResultItem
              key={qs.question}
              question={qs}
              answer={answers[index]}
            />
          ))}
        </>
      )}
      <Link to="/" className={cx("btn-play")}>
        PLAY AGAIN
      </Link>
    </div>
  );
};
