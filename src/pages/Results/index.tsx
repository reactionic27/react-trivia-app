import { navigate, RouteComponentProps } from "@reach/router";
import { Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ResultItem } from "@components/ResultItem";
import { CLEAR_DATA_REQUEST } from "@redux/constants";
import getQuestionState from "@redux/selectors";
import { Question } from "@types";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ResultsPage = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { questions, answers } = useSelector(getQuestionState);

  const getResults = () => {
    let count = 0;
    questions.forEach((qs: Question, index: number) => {
      if (qs.correct_answer === answers[index]) {
        count++;
      }
    });
    return count;
  };

  const replay = () => {
    dispatch({ type: CLEAR_DATA_REQUEST });
    navigate("/");
  };

  return (
    <div className="results-container">
      {questions && questions.length > 0 && (
        <>
          <Typography.Title level={2}>
            You scored {getResults()} / {questions.length}
          </Typography.Title>
          {questions.map((qs: Question, index: number) => (
            <ResultItem
              key={qs.question}
              question={qs}
              answer={answers[index]}
            />
          ))}
        </>
      )}
      <div className="button-wrapper">
        <Button type="primary" onClick={replay}>
          PLAY AGAIN
        </Button>
      </div>
    </div>
  );
};
