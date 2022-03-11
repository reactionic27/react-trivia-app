import React from "react";
import { string, object } from "prop-types";
import cx from "classnames";
import "./style.css";

export const ResultItem = ({ question, answer }) => {
  const isCorrect = question.correct_answer === answer;

  return (
    <div
      className={cx({
        "result-item": true,
        correct: isCorrect,
      })}
    >
      <div className={cx("result-sign")}>{isCorrect ? "+" : "-"}</div>
      <div className={cx("question")}>{question.question}</div>
    </div>
  );
};

ResultItem.propTypes = {
  question: object.isRequired,
  answer: string.isRequired,
};
