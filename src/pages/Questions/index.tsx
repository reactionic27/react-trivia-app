import { navigate } from "@reach/router";
import { useState } from "react";
import { QuestionCard } from "../../components/Card";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QuestionsPage = ({ questions }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (answer: string) => {
    // dispatch({
    //   type: "answers",
    //   payload: answers ? [...answers, answer] : [answer],
    // });
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === questions.length - 1) {
      navigate("/results");
    }
  };

  return (
    <div className="questions-container">
      {questions[currentIndex] && (
        <>
          <h1>{questions[currentIndex].category}</h1>
          <QuestionCard
            title={questions[currentIndex].question}
            handleClick={handleClick}
          />
          <span className="question-index">
            {currentIndex + 1} / {questions.length}
          </span>
        </>
      )}
    </div>
  );
};
