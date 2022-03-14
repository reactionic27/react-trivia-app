import { navigate, RouteComponentProps } from "@reach/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionCard } from "../../components/Card";
import {
  GET_QUESTIONS_REQUEST,
  POST_ANSWER_REQUEST,
} from "../../redux/constants";
import getQuestionState from "../../redux/selectors";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const QuestionsPage = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { questions } = useSelector(getQuestionState);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch({ type: GET_QUESTIONS_REQUEST });
  }, []);

  const handleClick = (answer: string) => {
    dispatch({ type: POST_ANSWER_REQUEST, payload: { answer } });
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
