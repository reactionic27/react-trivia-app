import { Link } from "@reach/router";
import cx from "classnames";
import "./style.css";

export const IntroUi = () => (
  <div className={cx("intro-container")}>
    <h1>Welcome to the Trivia Challenge</h1>
    <h2>You will be presented with 10 True or False questions.</h2>
    <h2>Can you score 100%?</h2>
    <Link to="/questions">BEGIN</Link>
  </div>
);
