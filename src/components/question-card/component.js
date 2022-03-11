import React from "react";
import { string, func } from "prop-types";
import cx from "classnames";
import "./style.css";

export const QuestionCard = ({ title, handleClick }) => (
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

QuestionCard.propTypes = {
  title: string.isRequired,
  handleClick: func.isRequired,
};
