import { Link, RouteComponentProps } from "@reach/router";
import { ResultItem } from "../../components/ResultItem";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getResults = (questions: any, answers: any) => {
  let count = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questions.forEach((qs: any, index: number) => {
    if (qs.correct_answer === answers[index]) {
      count++;
    }
  });
  return count;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ResultsPage = (props: RouteComponentProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const questions: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const answers: any = [];
  return (
    <div className="results-container">
      {questions && (
        <>
          <h1>
            You scored {getResults(questions.results, answers)} /{" "}
            {questions.results.length}
          </h1>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {questions.results.map((qs: any, index: number) => (
            <ResultItem
              key={qs.question}
              question={qs}
              answer={answers[index]}
            />
          ))}
        </>
      )}
      <Link to="/" className="btn-play">
        PLAY AGAIN
      </Link>
    </div>
  );
};
