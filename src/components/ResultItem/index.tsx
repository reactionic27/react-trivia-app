import cx from "classnames";
import { Question } from "@types";

import "./style.css";

type Props = {
  question: Question;
  answer: string;
};

export const ResultItem = ({ question, answer }: Props) => {
  const isCorrect = question.correct_answer === answer;

  return (
    <div
      className={cx({
        "result-item": true,
        correct: isCorrect,
      })}
    >
      <div className={cx("result-sign")}>{isCorrect ? "+" : "-"}</div>
      <div
        className={cx("question")}
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
    </div>
  );
};
