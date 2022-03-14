import cx from "classnames";

import "./style.css";

type Props = {
  title: string;
  handleClick: (args: string) => void;
};

export const QuestionCard = ({ title, handleClick }: Props) => (
  <div className={cx("question-card")}>
    <h2>{title}</h2>
    <button className={cx("btn-answer")} onClick={() => handleClick("True")}>
      TRUE
    </button>
    <button className={cx("btn-answer")} onClick={() => handleClick("False")}>
      FALSE
    </button>
  </div>
);
