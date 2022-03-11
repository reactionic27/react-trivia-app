import { useContext, useState } from "react";
import cx from "classnames";
import "./style.css";
import { AppContext } from "../../App";
import { QuestionCard } from "../../components/question-card";
import { navigate } from "@reach/router";

export const QuestionsUi = ({ questions }) => {
  const {
    state: { answers },
    dispatch,
  } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (answer) => {
    dispatch({
      type: "answers",
      payload: answers ? [...answers, answer] : [answer],
    });
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === questions.length - 1) {
      navigate("/results");
    }
  };

  return (
    <div className={cx("questions-container")}>
      {questions[currentIndex] && (
        <>
          <h1>{questions[currentIndex].category}</h1>
          <QuestionCard
            title={questions[currentIndex].question}
            handleClick={handleClick}
          />
          <span className={cx("question-index")}>
            {currentIndex + 1} / {questions.length}
          </span>
        </>
      )}
    </div>
  );
};
