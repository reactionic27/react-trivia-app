import { Link, RouteComponentProps } from "@reach/router";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const IntroPage = (props: RouteComponentProps) => (
  <div className="intro-container">
    <h1>Welcome to the Trivia Challenge</h1>
    <h2>You will be presented with 10 True or False questions.</h2>
    <h2>Can you score 100%?</h2>
    <Link to="/questions">BEGIN</Link>
  </div>
);
