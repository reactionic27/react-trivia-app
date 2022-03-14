import cx from "classnames";
import "./style.css";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  question: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answer: any;
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
      <div className={cx("question")}>{question.question}</div>
    </div>
  );
};
